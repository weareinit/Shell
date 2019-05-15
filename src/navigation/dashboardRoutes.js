import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from '../components/navbar'

import Application from '../components/application'
import Home from '../components/dashboard'
import Support from '../components/support'
import Essentials from '../components/essentials'
import Profile from '../components/profile'
import './style.css'
class Dashboard extends Component {

    render() {
        let { url } = this.props;
        return (
            <div id="dashboard">
                <Navbar />
                <div className="dashboard-container">
                    <Route path={`${url}/`} component={Home} exact />
                    <Route path={`${url}/application`} component={Application} />
                    <Route path={`${url}/support`} component={Support} />
                    <Route path={`${url}/profile`} component={Profile} />
                    <Route path={`${url}/essentials`} component={Essentials} />
                </div>
            </div>
        )
    }
}

export default Dashboard