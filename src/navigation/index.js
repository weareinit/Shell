/**
 * Main Navigation
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import { DASHBOARD, AUTH, LIVE, SPONSOR, LANDING } from "../config/pageRoutes";
import Auth from "../components/auth";
import Live from "../components/live";
import Landing from "../components/landing";
import Sponsor from "../components/sponsor";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={LANDING} component={Landing} />
          <Route exact path={AUTH} component={Auth} />
          <Route exact path={LIVE} component={Live} />
          <Route exact path={SPONSOR} component={Sponsor} />
          <Route
            path={DASHBOARD}
            render={({ match: { url } }) => <Dashboard url={url} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Navigation;
