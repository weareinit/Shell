import React, { Component } from "react";
import { individualData, announcementCardInfo } from "../../config/data/home";
// import { ReactComponent as Avatar } from "../../assets/frontpage/shell.svg";
import { Card } from "../common";
import "./styles.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { fullName, score, status } = individualData;
    return (
      <div className="dashboard-page">
        <h1>Home</h1>
        <div className="home">
          {/* User info */}
          <div className="user-info">
            <img
              className="home-avatar"
              alt=""
              src="https://image.flaticon.com/icons/svg/145/145846.svg"
            />
            {/* <Avatar className="home-avatar" /> */}
            <div className="user">
              <h4>Welcome, {fullName}!</h4>
              <h4>Event Points: {score}</h4>
            </div>

            <div className="application-status">
              <h4>Application Status:</h4>
              <Card
                activeClassName="active-application-status-button"
                styleClassName="application-status-button"
                title={status}
                description={
                  "Please fill out your application so we can process it. Bird bird bird bird bird bird human why take bird out i could have eaten that spit up on light. "
                }
              />
            </div>
          </div>

          {/* announcements */}
          <div className="home-announcements">
            <h3>Announcements:</h3>
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
  }
}

export default Home;
