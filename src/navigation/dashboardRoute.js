/**
 * Protected routes
 * This function get triggered everytime user navigates to a dashboard page
 */

import React,{useState,useEffect, Fragment} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import { Footer, Navbar,Loading } from '../components'
import querries from '../utils/querries'
import services from '../services/routes'

const DashboardRoute = ({ component: Component,history,...rest }) => {
 let userData;
 const[loading,setLoading]=useState(true);
 const[refetch,setRefetch]=useState(false);
 const[data,setData]=useState({});
 
 const getData = async () =>{
    await services.getUserInfo(history)
    userData = await JSON.parse(querries.retrieveItem('userData'))
    setData(userData)
    if(userData)
    await setLoading(false)
  }

useEffect(() => {
  getData();
},[])

if(refetch){
  getData()
  setRefetch(false)
  }

  return (
    <div className='dashboard-wrapper'>
      <Route
        {...rest}
        render={props =>
          querries.isAuthorized(props.history) ? (
          (loading && <div className="dash-modal"><Loading size={50} color='white' /></div>)||
            <Fragment>
            <Navbar fullName={data.firstName} />
            <Component {...props} refresh={setRefetch} userData={data} />
            <Footer showSocials />
            </Fragment>
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
      {window.scrollTo(0,0)}
    </div>
  )
}

export default withRouter(DashboardRoute)
