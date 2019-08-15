/**
 * Auth routes
 * This function get triggered everytime user navigates an auth page
 */

import React, { useState, useEffect, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

const AuthRoute = ({ component: Component, history, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default withRouter(AuthRoute);
