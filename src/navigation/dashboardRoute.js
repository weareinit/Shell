/**
 * Protected routes
 * This function get triggered everytime user navigates to a dashboard page
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import querries from '../utils/querries'
import services from '../services/routes'

const DashboardRoute = ({ component: Component, ...rest }) => {
  services.getUserInfo(rest.history)
  const userData = JSON.parse(querries.retrieveItem('userData'))

  const getNames = () =>
    userData
      ? { f: userData.firstName, l: userData.lastName }
      : { f: 'Unkwon', l: 'User' }
  console.log(userData)
  return (
    <div className='dashboard-wrapper'>
      <Navbar fullName={getNames()} />{' '}
      <Route
        {...rest}
        render={props =>
          querries.isAuthorized(props.history) ? (
            <Component {...props} userData={userData} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth',
                state: { from: props.location }
              }}
            />
          )
        }
      />{' '}
      <Footer showSocials />
    </div>
  )
}

export default DashboardRoute
