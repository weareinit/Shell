//workshop tracks for the landing page
import React, { Component } from "react";
import { ReactComponent as Shell } from "../../../assets/frontpage/shell.svg";
import "../styles.css";
import tracks from "../../../config/data/tracks";

class Tracks extends Component {
  //Fucntion that takes Data and renders card structure
  TrackItem = (trackParams, i) => {
    let { title, path, details, trackDetails } = trackParams;
    return (
      <div key={i} className="track-card-container">
        <h3 className="track-card-item-title">{title}</h3>
        <img className="track-icon" alt="track" src={path} />
        <p className="track-card-item-description">{details}</p>
        <div id="tech-detail-container">
          {trackDetails.map((techDetails, i) => (
            <div key={i} className="shell-and-info">
              <Shell className="shell-icon" />
              <p className="tech-detail">{techDetails}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="tracks-section-container">
        <h1  className="landing-section-title">Learning tracks</h1>
        <p className="landing-section-paragraph">
          {" "}
          Sometimes the process of learning can get overwhelming. There’s so
          much to learn, and not enough time to devote to really diving in. When
          I get in a situation where I feel like giving up, or like I’ll never
          be able to learn what I want to learn in the time I have, it can help
          to turn to some outside inspiration.
        </p>
        <div className="track-items-container">
          {tracks.map((data, i) => this.TrackItem(data, i))}
        </div>
      </div>
    );
  }
}

export default Tracks;
