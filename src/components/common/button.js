//work in progress...want to create a reusable button
import React from "react";
import "./styles.css";

const Button = props => {
  const { action, title, id } = props;

  const buttonClicked = () => {
    action(id);
  };
  return (
    <button onClick={buttonClicked} className="submit-button" id={props.styleId}>
      <h3>{title}</h3>
    </button>
  );
};

export { Button };
