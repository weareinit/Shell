/**
 * Theme backgrounds
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class WaveBackground extends Component {
  render() {
    return (
      <div
        className="wave-background-objects"
        id="wave-background-objects"
        name={this.props.name || "animated-waves"}
      >
        <div id="shore">
          <div id="wetsand">
            <img
              id="wetsand3"
              className="decor"
              alt="placeholder"
              src={require("../../assets/waves/wetsand3.svg")}
            />
            <img
              id="wetsand2"
              className="decor"
              alt="placeholder"
              src={require("../../assets/waves/wetsand2.svg")}
            />
            <div id="surfboard" className="decor"></div>
            <img
              id="wetsand1"
              className="decor"
              alt="placeholder"
              src={require("../../assets/waves/wetsand1.svg")}
            />
          </div>
          <div id="surf">
            <img
              id="surf3"
              className="decor"
              alt="placeholder"
              src={require("../../assets/waves/surf3.svg")}
            />
            <img
              id="surf2"
              className="decor"
              alt="placeholder"
              src={require("../../assets/waves/surf2.svg")}
            />
            {/* <img id="surf1" className="decor" alt="placeholder" src={require('../../assets/waves/surf1.svg')} /> */}
          </div>
        </div>
        <div className="wave-child"> {this.props.children}</div>
      </div>
    );
  }
}

WaveBackground.propTypes = {
  children: PropTypes.element.isRequired
};

export { WaveBackground };
