import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import DashboardRoutes from './dashboardRoutes';

import Auth from '../components/auth'
import Live from '../components/live'
import Landing from '../components/landing'
import Sponsor from '../components/sponsor'
import './style.css'
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false,
        }
    }

    render() {
        return (
            <div className="pages">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/live" component={Live} />
                    <Route exact path="/sponsor" component={Sponsor} />
                    <Route path="/dashboard"
                        render={({ match: { url } }) => (
                            <DashboardRoutes url={url} />
                        )} />
                </Switch>
            </div>
        )
    }
}

export default Navigation
