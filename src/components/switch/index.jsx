/**
 * Button Switch
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Switch = ({ action, titleOne, titleTwo }) => {
  const left = "left";
  const right = "right";
  const [selected, setSelected] = useState(left);

  return (
    <div className="swch-container">
      <button
        className={`swch-btn-half--left  ${selected === left &&
          "swch-btn--selected"}`}
        type="button"
        onClick={() => {
          setSelected(left);
          action(left);
        }}
      >
        {titleOne}
      </button>
      <button
        className={`swch-btn-half--right switchButton ${selected === right &&
          "swch-btn--selected"}`}
        type="button"
        onClick={() => {
          setSelected(right);
          action(right);
        }}
      >
        {titleTwo}
      </button>
    </div>
  );
};
Switch.propTypes = {
  action: PropTypes.func.isRequired,
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired
};
export { Switch };
