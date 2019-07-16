import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faSignOutAlt,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";

import Navigation from "./navigation";
import "./css/App.css"; //load general/global css

//preloading icons
library.add(
  faCheckSquare,
  faSignOutAlt,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling
);

//load enviroment vars...
dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
