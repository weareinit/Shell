import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/dashboard';
import Auth from '../pages/auth'
import Live from '../pages/live'
import Landing from '../pages/landing'
import Sponsor from '../pages/sponsor'
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
                                <Dashboard url={url} />
                            )} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Navigation
