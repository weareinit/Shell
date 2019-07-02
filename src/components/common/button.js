import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

/* - "shell-styled" button template */
const Button = ({ title, id, action, styleId, lableStyle, type }) => {
  const buttonClicked = () => {
    if (action) action(id);
  };

  return (
    <button
      type={type}
      onClick={buttonClicked}
      className={"submit-button "}
      id={styleId || ""}
    >
      <p className={lableStyle || ""}>{title}</p>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.func,
  styleId: PropTypes.string,
  lableStyle: PropTypes.string,
  type: PropTypes.string
};

export { Button };
