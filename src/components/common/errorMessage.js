/**
 *  A reusable error message wrapper component
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false
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
                  <FontAwesomeIcon icon={faExclamationCircle} /> <p>{error}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    else return <></>;
  }
}
ErrorMessage.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  children: PropTypes.element,
  extraStylesClass: PropTypes.string
};
export { ErrorMessage };
