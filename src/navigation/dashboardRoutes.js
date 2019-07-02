import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Navbar from "../components/navbar";
import { GradientBackground, Footer } from "../components/common/";

import Application from "../components/application";
import Home from "../components/home";
import Support from "../components/support";
import Essentials from "../components/essentials";
import Profile from "../components/profile";
import "./style.css";

class Dashboard extends Component {
  render() {
    let { url } = this.props;
    return (
      <div id="dashboard">
        <GradientBackground>
          <Fragment>
            <Navbar />
            <div className="dashboard-container">
              <Route path={`${url}/`} component={Home} exact />
              <Route path={`${url}/application`} component={Application} />
              <Route path={`${url}/support`} component={Support} />
              <Route path={`${url}/profile`} component={Profile} />
              <Route path={`${url}/essentials`} component={Essentials} />
              <Footer showSocials={true} />
            </div>
          </Fragment>
        </GradientBackground>
      </div>
    );
  }
}

export default Dashboard;
