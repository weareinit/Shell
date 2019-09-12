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
                "applied" &&
                "applactions-status-applied") ||
                (applicationStatus.toLowerCase() === "accepted" &&
                  "applactions-status-accepted") ||
                (applicationStatus.toLowerCase() === "confirmed" &&
                  "applactions-status-confirmed")}`}
              title={mixed.wordCase(applicationStatus) }
              descStyles={{ margin: "auto", display: "block" }}
              description={
                (applicationStatus.toLowerCase() === "applied" &&
                  "Fin-tastic! Your application has been received! Look out for a response email soon.") ||
                (applicationStatus.toLowerCase() === "accepted" &&
                  "Shell yeah! You’ve been accepted into ShellHacks. Now look below and confirm your attendance before the ship sails!") ||
                (applicationStatus.toLowerCase() === "confirmed" &&
                  "Yeah buoy! You’re confirmed for ShellHacks. Sea ya at the shore!") ||
                (applicationStatus.toLowerCase() === "accepted" &&
                  "Confirm your spot at ASAP") ||
                (applicationStatus.toLowerCase() === "confirmed" &&
                  "You are all set, can't wait to see you at ShellHacks!") ||
                (applicationStatus.toLowerCase() === "can't go" &&
                "Sad you can't make it, be sure to apply again next year!") ||
                "Water you doing? Fill out your application now to be considered for ShellHacks!"
              }
            />
          </div>
        </div>
        {applicationStatus.toLowerCase() === "accepted" && (
          <div
            style={{
              margin: "25px 0 80px",
              minWidth: "70px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
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
              (cantGo && (
                <div className="submission-modal">
                  <h1>You can't go :(</h1>
                  <FontAwesomeIcon
                    style={{ margin: "auto", display: "block" }}
                    icon="times"
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
                  <p style={{ marginBottom: 25, textAlign: "center" }}>
                    You have been accepted to ShellHacks! <br />
                    Click on the button below to confirm your spot or notify us if you can't go
                  </p>
                  <Button title="Confirm Now!" action={confirmAsync} />
                  <Button title="I Can't Go! :(" action={cantGoAsync} />
                </>
              )}
          </div>
        )}

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
