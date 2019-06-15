import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import DashboardRoutes from "./dashboardRoutes";

import Auth from "../components/auth";
import Live from "../components/live";
import Landing from "../components/landing";
import Sponsor from "../components/sponsor";
import "./style.css";
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false,
        }
    };

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/auth" render={
                        (props) => (
                            <Auth props={props} />
                        )
                    } component={Auth} />
                    <Route exact path="/live" component={Live} />
                    <Route exact path="/sponsor" component={Sponsor} />
                    <Route path="/dashboard"
                        render={({ match: { url } }) => (
                            <DashboardRoutes url={url} />
                        )} />
                </Switch>
            </Fragment>
        );
    }
}

export default Navigation;
