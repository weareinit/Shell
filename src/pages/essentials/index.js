import React, { Component } from "react";

import { Card } from "../../components";
import {
  ParkingCardContent,
  ImportantItemsCardContent,
  LearningTracksCardContent
} from "./contents";
import {
  faLaptop,
  faCar,
  faSuitcaseRolling
} from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
import "./styles.css";

class Essentials extends Component {
  render() {
    let props = {
      styleClassName: "dashboard-card align-title-icon",
      activeClassName: "active-dashboard-card align-title-icon"
    };
    return (
      <div className="dashboard-page">
        <h1>Essentials</h1>
        <div className="essentials-container">
          <div className="support-description">
            <p>
              I shall purr myself to sleep swipe at owner's legs but ask to go
              outside and ask to come inside and ask to go outside and ask to
              come inside i bet my nine lives on you-oooo-ooo-hooo so chew the
              plant milk the cow but intrigued by the shower.
            </p>
          </div>
          <Card
            title="Parking and Transportation"
            content={ParkingCardContent}
            titleIcon={faCar}
            {...props}
          />
          <Card
            title="What should you bring to Shellhacks"
            titleIcon={faSuitcaseRolling}
            content={ImportantItemsCardContent}
            {...props}
          />
          <Card
            title="Learning Tracks"
            titleIcon={faLaptop}
            content={LearningTracksCardContent}
            {...props}
          />
        </div>
      </div>
    );
  }
}

export default Essentials;
