/**
 *  Reusable error message components
 */

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

/**
 * Displays a block error
 * as a list of orrors
 */
const BlockError = ({ shouldShow, extraStylesClass, children, errors }) =>
  shouldShow ? (
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
  ) : (
    <></>
  );

BlockError.defaultProps = {
  shouldShow: false
};

BlockError.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  children: PropTypes.element,
  className: PropTypes.string
};

/**
 * Displays an error on the
 * same line as the label
 */
const InlineError = ({ shouldShow, className, error, label, name }) => (
  <div className={`inline-error-message ${className || ""}`}>
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

InlineError.defaultProps = {
  shouldShow: false
};

InlineError.propTypes = {
  shouldShow: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string
};

export { BlockError, InlineError };
