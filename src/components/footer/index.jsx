/**
 * Main site footer
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">{/* add contents here */}</div>
      </div>
    );
  }
}

Footer.propTypes = {
  showSocials: PropTypes.bool
};
export { Footer };
