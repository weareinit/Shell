import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from '../components/navbar'

import Application from '../components/application'
import Home from '../components/home'
import Schedule from '../components/schedule'
import Faq from '../components/faq'
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
                    <Route path={`${url}/schedule`} component={Schedule} />
                    <Route path={`${url}/profile`} component={Profile} />
                    <Route path={`${url}/faq`} component={Faq} />
                </div>
            </div>
        )
    }
}

export default Dashboard