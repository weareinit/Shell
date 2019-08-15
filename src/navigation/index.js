/**
 * Main Navigation
 */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Application from "../pages/application";
import Home from "../pages/home";
import Support from "../pages/support";
import Essentials from "../pages/essentials";
import Profile from "../pages/profile";
import Auth from "../pages/auth";
import NoMatch from "../pages/p_404";

import DashboardRoute from "./dashboardRoute";
import AuthRoute from "./AuthRoute";

import "./styles.css";

class Navigation extends Component {
  render() {
    return (
      <Switch>
        <DashboardRoute exact path="/" component={Home} />
        <DashboardRoute exact path="/profile" component={Profile} />
        <DashboardRoute exact path="/essentials" component={Essentials} />
        <DashboardRoute exact path="/support" component={Support} />
        <DashboardRoute exact path="/application" component={Application} />
        <AuthRoute exact path="/auth" component={Auth} />
        <AuthRoute exact path="/auth/register" component={Auth} />
        <AuthRoute exact path="/auth/email-verification" component={Auth} />
        <AuthRoute exact path="/auth/forgot-password" component={Auth} />
        <AuthRoute exact path="/auth/reset-password" component={Auth} />
        <AuthRoute exact path="/auth/resend-email-code" component={Auth} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Navigation;
