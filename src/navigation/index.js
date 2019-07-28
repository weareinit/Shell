/**
 * Main Navigation
 */
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Application from '../pages/application'
import Home from '../pages/home'
import Support from '../pages/support'
import Essentials from '../pages/essentials'
import Profile from '../pages/profile'
import Auth from '../pages/auth'
import NoMatch from '../pages/p_404'

import DashboardRoute from './dashboardRoute'
import './styles.css'

class Navigation extends Component {
  render () {
    return (
      <Switch>
        <DashboardRoute exact path='/' component={Home} />
        <DashboardRoute exact path='/profile' component={Profile} />
        <DashboardRoute exact path='/essentials' component={Essentials} />
        <DashboardRoute exact path='/support' component={Support} />
        <DashboardRoute exact path='/application' component={Application} />
        <Route exact path='/auth' component={Auth} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Navigation
