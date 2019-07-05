import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Navbar from "../components/navbar";
import { GradientBackground, Footer } from "../components/common";

import {
  DASHBOARD,
  APPLICATION,
  PROFILE,
  SUPPORT,
  ESSENTIAL
} from "../config/pageRoutes";

import Application from "../components/application";
import Home from "../components/home";
import Support from "../components/support";
import Essentials from "../components/essentials";
import Profile from "../components/profile";
import "./style.css";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <GradientBackground>
          <Fragment>
            <Navbar />
            <div className="dashboard-container">
              <Route path={DASHBOARD} component={Home} exact />
              <Route path={DASHBOARD + APPLICATION} component={Application} />
              <Route path={DASHBOARD + SUPPORT} component={Support} />
              <Route path={DASHBOARD + PROFILE} component={Profile} />
              <Route path={DASHBOARD + ESSENTIAL} component={Essentials} />
              <Footer showSocials={true} />
            </div>
          </Fragment>
        </GradientBackground>
      </div>
    );
  }
}

export default Dashboard;
