/**
 * Protected routes
 * This function get triggered everytime user navigates to a dashboard page
 */

import React,{useState,useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import { Footer, Navbar,Loading } from '../components'
import querries from '../utils/querries'
import services from '../services/routes'

const DashboardRoute = ({ component: Component,history,...rest }) => {
 let userData;
 const[loading,setLoading]=useState(true);
 const[data,setData]=useState({});
 
useEffect(() => {
  const getData = () =>{
    services.getUserInfo(history)
    userData = JSON.parse(querries.retrieveItem('userData'))
    setData(userData)
    if(userData)
    setLoading(false)
  }
  getData();

},[])

  return (
    <div className='dashboard-wrapper'>
      <Route
        {...rest}
        render={props =>
          querries.isAuthorized(props.history) ? (
          (loading && <div className="dash-modal"><Loading size={50} color='white' /></div>)||
            <>
            <Navbar fullName={data.firstName} />
            <Component {...props} userData={data} />
            <Footer showSocials />
            </>
          ) : (
            <Redirect
              to={{
                pathname: '/auth',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </div>
  )
}

export default withRouter(DashboardRoute)
