/**
 * Controlled Loading Components
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { SyncLoader } from "react-spinners";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const override = css`
  display: block;
  margin: 0;
  border-color: red;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      loading: false,
      isClosable: false,
      shouldShow: false,
      errorText: "",
      submitionStatus: ""
    };
  }

  closeMadal = () => {
    this.setState({
      shouldShow: false
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.shouldShow === prevState.shouldShow
      ? {}
      : {
          submitted: nextProps.submitted,
          loading: nextProps.loading,
          isClosable: nextProps.isClosable,
          shouldShow: nextProps.shouldShow,
          errorText: nextProps.errorText,
          submitionStatus: nextProps.submitionStatus
        };
  }

  render() {
    let { withOverlay } = this.props;

    if (withOverlay && this.state.shouldShow)
      return (
        <div
          className="loading-overlay"
          style={{ display: `${!this.state.shouldShow && "none"}` }}
        >
          <div /*modal card*/ className="loading-modal">
            <div className="loading-close" onClick={this.closeMadal}>
              {//returns close icon, or fragment
              this.state.isClosable && (
                <FontAwesomeIcon size={"2x"} icon={faTimes} />
              )}
            </div>
            {//returns submittion status,or error text ...or a fragment
            this.state.errorText ? (
              <h3>{this.state.errorText}</h3>
            ) : (
              this.state.submitionStatus && (
                <h1>{this.state.submitionStatus}</h1>
              )
            )}
            {//returns loading, err, or success icon
            this.state.loading ? (
              <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={"var(--shell-dark-brown)"}
                margin={"20px;"}
                loading={this.state.loading}
              />
            ) : this.state.submitted ? (
              <FontAwesomeIcon size={"5x"} icon={faCheck} color="green" />
            ) : (
              <FontAwesomeIcon size={"5x"} icon={faTimes} color="red" />
            )}
          </div>
        </div>
      );
    else if (withOverlay) return <></>;
    else
      return (
        <SyncLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={"var(--shell-dark-brown)"}
          margin={"20px;"}
          loading={this.state.loading}
        />
      );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  withOverlay: PropTypes.bool.isRequired,
  submitionStatus: PropTypes.string,
  isClosable: PropTypes.bool,
  shouldShow: PropTypes.bool,
  errorText: PropTypes.string,
  submitted: PropTypes.bool
};

export { Loading };
