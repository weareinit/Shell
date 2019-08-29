/**
 * Dashboard protected routes
 * ...this function get triggered everytime user navigates to a dashboard page
 */

import React, { useState, useEffect, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { Footer, Navbar, Loading } from "../components";
import querries from "../utils/querries";
import services from "../services/routes";
import States from "../pages/auth/states";

const DashboardRoute = ({ component: Component, history, ...rest }) => {
  let userData;
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    await services.getUserInfo(history);
    userData = await JSON.parse(querries.retrieveItem("userData"));
    setData(userData);
    if (userData) await setLoading(false);
  };

  const { LOGIN } = States;

  useEffect(() => {
    getData();
    try {
      // new browsers
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      //older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  if (refetch) {
    getData();
    setRefetch(false);
  }

  return (
    <div className="dashboard-wrapper">
      <Route
        {...rest}
        render={props =>
          querries.isAuthorized() ? (
            (loading && (
              <div className="dash-modal">
                <Loading size={50} color="white" />
              </div>
            )) || (
              <Fragment>
                <Navbar fullName={data.firstName} />
                <Component {...props} refresh={setRefetch} userData={data} />
                <Footer showSocials />
              </Fragment>
            )
          ) : (
            <Redirect to={LOGIN} />
          )
        }
      />
    </div>
  );
};

export default withRouter(DashboardRoute);
