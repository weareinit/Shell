/**
 * Main Navigation
 */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Application from "../pages/application";
import Home from "../pages/home";
import Support from "../pages/support";
import Essentials from "../pages/essentials";
import Profile from "../pages/profile";
import Auth from "../pages/auth";
import Mentor from "../pages/mentor";
import NoMatch from "../pages/p_404";

import DashboardRoute from "./dashboardRoute";
import States from "../pages/auth/states";

import "./styles.css";

class Navigation extends Component {
  render() {
    const {
      LOGIN,
      SIGNUP,
      VERIFY_EMAIL,
      FORGOT_PASSWORD,
      RESET_PASSWORD,
      RESEND_VERIFY_CODE
    } = States;

    return (
      <Switch>
        <DashboardRoute exact path="/" component={Home} />
        <DashboardRoute exact path="/profile" component={Profile} />
        <DashboardRoute exact path="/essentials" component={Essentials} />
        <DashboardRoute exact path="/support" component={Support} />
        {/* <DashboardRoute exact path="/application" component={Application} /> */}
        <Route exact path="/mentor" component={Mentor} />
        <Route exact path={LOGIN} component={Auth} />
        <Route exact path={SIGNUP} component={Auth} />
        <Route exact path={VERIFY_EMAIL} component={Auth} />
        <Route exact path={FORGOT_PASSWORD} component={Auth} />
        <Route exact path={RESET_PASSWORD} component={Auth} />
        <Route exact path={RESEND_VERIFY_CODE} component={Auth} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Navigation;
