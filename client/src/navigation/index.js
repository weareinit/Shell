import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/dashboard';
import Auth from '../pages/auth'
import Live from '../pages/live'
import Landing from '../pages/landing'
import Sponsor from '../pages/sponsor'
//nested in dashboard
import Application from '../components/application'
import Home from '../components/home'
import Schedule from '../components/schedule'
import Faq from '../components/faq'
import Profile from '../components/profile'
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
            <div className="navPageContainer">
                {/* DO NOT REMOVE APP CLASS */}
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/auth" component={Auth} />
                        <Route exact path="/live" component={Live} />
                        <Route exact path="/sponsor" component={Sponsor} />
                        <Route path="/dashboard"
                            render={({ match: { url } }) => (
                                <div>
                                    <Dashboard />
                                    <Route path={`${url}/`} component={Home} exact />
                                    <Route path={`${url}/application`} component={Application} />
                                    <Route path={`${url}/schedule`} component={Schedule} />
                                    <Route path={`${url}/profile`} component={Profile} />
                                    <Route path={`${url}/faq`} component={Faq} />
                                </div>
                            )} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Navigation
