/**
 * Main Navigation
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

import Application from "../pages/application";
import Home from "../pages/home";
import Support from "../pages/support";
import Essentials from "../pages/essentials";
import Profile from "../pages/profile";
import Auth from "../pages/auth";

import "./styles.css";

class Navigation extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/auth"} component={Auth} />
        <div className="dashboard-wrapper">
          <Navbar />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/application"} component={Application} />
          <Route exact path={"/support"} component={Support} />
          <Route exact path={"/essentials"} component={Essentials} />
          <Route exact path={"/profile"} component={Profile} />
          <Footer showSocials />
        </div>
      </Switch>
    );
  }
}

export default Navigation;
