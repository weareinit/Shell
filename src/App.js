import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";

import "./css/App.css";

//preloading icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faSignOutAlt, faFacebookSquare, faInstagram, faLinkedin, faTwitter, faDiscord);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  };

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
