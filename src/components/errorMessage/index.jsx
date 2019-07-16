/**
 *  Reusable error message wrapper
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

class BlockError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.shouldShow === prevState.shouldShow
      ? {}
      : { shouldShow: nextProps.shouldShow };
  }

  render() {
    let { extraStylesClass, children, errors } = this.props;

    if (this.state.shouldShow)
      return (
        <div className={`error-message ${extraStylesClass || ""}`}>
          {children || (
            <ul>
              {errors.map((error, i) => (
                <li key={i}>
                  <FontAwesomeIcon icon="exclamation-circle" /> <p>{error}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    else return <></>;
  }
}
BlockError.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  children: PropTypes.element,
  extraStylesClass: PropTypes.string,
};

const InlineError = ({ shouldShow, extraStylesClass, error, label, name }) => {
  return (
    <div className={`inline-error-message ${extraStylesClass || ""}`}>
      {label && <label htmlFor={name}>{label}</label>}
      {shouldShow &&
        (error && (
          <p>
            <FontAwesomeIcon icon="exclamation-circle" />
            {error}
          </p>
        ))}
    </div>
  );
};

InlineError.propTypes = {
  shouldShow: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  extraStylesClass: PropTypes.string,
};

export { BlockError, InlineError };
