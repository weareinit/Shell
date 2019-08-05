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
        <div className="footer-content">
          <p>
            ©2019{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://upe.cs.fiu.edu"
            >
              Upsilon Pi Epsilon at FIU
            </a>
            {" | "}
            <a className="links" href="mailto: upe@fiu.edu">
              Contact Us
            </a>
            {" | "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >
              MLH Code of Conduct
            </a>
            {" | "}
            <>
              Made in Miami with{" "}
              <span role="img" aria-label="turtle">
                🐢
              </span>
              ,{" "}
              <span role="img" aria-label="shell">
                🐚
              </span>
              ,{" "}
              <span role="img" aria-label="heart">
                ❤
              </span>
              ,{" "}
              <span role="img" aria-label="sun">
                ☀
              </span>
              ,{" "}
              <span role="img" aria-label="humbrella">
                {" "}
                ⛱
              </span>
              ,{" "}
              <span role="img" aria-label="wave">
                🌊
              </span>
              ,{" "}
              <span role="img" aria-label="turn..">
                🌀
              </span>{" "}
              by the ShellHacks Team
            </>
          </p>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  showSocials: PropTypes.bool
};
export { Footer };
