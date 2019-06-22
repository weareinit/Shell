import React, { Component } from "react";

import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <p>Made in Miami 🐢,🐚, ❤, ☀, ⛱, 🌊, 🌀 by the ShellHacks Team</p>
          <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">
            MLH Code of Conduct
          </a>
          <p>
            ©2019 <a href="http://upe.cs.fiu.edu">Upsilon Pi Epsilon at FIU</a>
          </p>
        </div>
      </div>
    );
  }
}
export { Footer };
