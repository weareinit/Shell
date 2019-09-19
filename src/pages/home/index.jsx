/**
 * Home Page
 */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import announcementCardInfo from "../../config/data/home";
import { Card, Button, Loading } from "../../components";
import mixed from "../../utils/mixed";
import routes from "../../services/routes";
import "./styles.css";

const Home = ({ refresh, userData }) => {
  const { applicationStatus, firstName, avatarID, email } = userData;
  let avatar = mixed.getAvatar(avatarID);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [cantGo, setCantGo] = useState(false);
  const [err, setErr] = useState(null);

  /**
   * Submits confirmation
   */
  const confirmAsync = async () => {
    setLoading(true);

    let success = () => {
      setLoading(false);
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
        refresh(true);
      }, 4000);
    };

    let faillure = error => {
      setLoading(false);
      setErr(error);
      setTimeout(() => {
        setErr(null);
        refresh(true);
      }, 4000);
    };
    await routes.confirm(email, success, faillure);
  };

  const cantGoAsync = async () => {
    setLoading(true);

    let success = () => {
      setLoading(false);
      setCantGo(true);
      setTimeout(() => {
        setCantGo(false);
        refresh(true);
      }, 4000);
    };

    let faillure = error => {
      setLoading(false);
      setErr(error);
      setTimeout(() => {
        setErr(null);
        refresh(true);
      }, 4000);
    };
    await routes.cantGo(email, success, faillure);
  };

  return (
    <div className="dashboard-page">
      <h1>Home</h1>
      <div className="home">
        {/* User info */}
        <div className="user-info">
          <img
            className="home-avatar"
            alt=""
            src={require(`../../assets/avatars/${avatar}`)}
          />
          <div className="user">
            <h2>Welcome, {mixed.wordCase(firstName)}!</h2>
          </div>

          <div className="application-status">
            <h3>Application Status</h3>
            <Card
              activeClassName="active-application-status-button"
              styleClassName={`application-status-button ${(applicationStatus.toLowerCase() ===
                "confirmed" &&
                "applactions-status-confirmed") ||
                "red-background"}`}
              title={
                applicationStatus.toLowerCase() === "confirmed"
                  ? mixed.wordCase(applicationStatus)
                  : "Expired"
              }
              descStyles={{ margin: "auto", display: "block" }}
              description={
                (applicationStatus.toLowerCase() === "confirmed" &&
                  "Yeah buoy! You’re confirmed for ShellHacks. Sea ya at the shore!") ||
                "The wave turned into a tsunami 😢"
              }
            />
          </div>
        </div>

        {/* ... */}
        {applicationStatus.toLowerCase() !== "confirmed" && (
          <div
            style={{
              margin: "25px 0 80px",
              minWidth: "70px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding:"25px",
              backgroundColor:"white",
              borderRadius:"10px"
            }}
          >
            {(loading && <Loading size={30} color="white" />) ||
              (confirmed && (
                <div className="submission-modal">
                  <h1>Confirmed!</h1>
                  <FontAwesomeIcon
                    style={{ margin: "auto", display: "block" }}
                    icon="check"
                    size="5x"
                  />
                </div>
              )) ||
              (err && (
                <div className="submission-modal">
                  <h1>Failed</h1>
                  <p>{err}</p>
                  <br />
                  <FontAwesomeIcon
                    style={{ margin: "auto", display: "block" }}
                    icon="times"
                    size="5x"
                  />
                </div>
              )) || (
                <>
                  <h3
                    style={{
                      marginBottom: 25,
                      textAlign: "center",
                      color: "#ed6565"
                    }}
                  >
                    Unfortunately we've reached acceptance capacity, but we hope
                    to see you next year.
                  </h3>
                </>
              )}
          </div>
        )}
        {/* ... */}
        {/* announcements */}
        <div className="home-announcements">
          <h3>Announcements</h3>
          {announcementCardInfo.map((data, i) => {
            let props = {
              title: data.title,
              description: data.description,
              date: data.date,
              styleClassName: "dashboard-card",
              activeClassName: "active-dashboard-card"
            };
            return <Card key={i} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
