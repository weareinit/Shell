/**
 * Page - wraps login, forgot password and signup
 * ------------------------------
 * @author Jehf K D., Luis H. (@jehfkemsy , @boxslide15)
 */

import React, { Component } from "react";
import { WaveBackground } from "../../components";
import Login from "./login";
import SignUp from "./signup";
import Verify from "./verify";
import ForgotPassword from "./forgotPassword";
import ResetPassword from "./resetPassword";
import getMessage from "../../utils/authMessage";
import { ReactComponent as Logo } from "../../assets/logos/organizer/shellhacks.svg";
import "./styles.css";

//get welcome messages on page load
const loginMessage = getMessage(true);
const registerMessage = getMessage(false);

//auth states
const authState = Object.freeze({
  LOGIN: "login",
  SIGNUP: "signup",
  VERIFY: "verify",
  FORGOT_PASSWORD: "forgot",
  RESET_PASSWORD: "reset"
});

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: authState.LOGIN
    };

    this.setAuthState = this.setAuthState.bind(this);
  }

  setAuthState = newState => {
    this.setState({ currentState: newState });
  };

  currForm = condition => {
    const {
      VERIFY,
      FORGOT_PASSWORD,
      LOGIN,
      SIGNUP,
      RESET_PASSWORD
    } = authState;

    let props = {
      setAuthState: this.setAuthState,
      VERIFY,
      FORGOT_PASSWORD,
      LOGIN,
      SIGNUP,
      RESET_PASSWORD
    };

    switch (condition) {
      case LOGIN:
        return <Login {...props} />;
      case SIGNUP:
        return <SignUp {...props} />;
      case VERIFY:
        return <Verify {...props} />;
      case FORGOT_PASSWORD:
        return <ForgotPassword {...props} />;
      case RESET_PASSWORD:
        return <ResetPassword {...props} />;
      default:
        return;
    }
  };

  currMessage = condition => {
    const {
      VERIFY,
      FORGOT_PASSWORD,
      LOGIN,
      SIGNUP,
      RESET_PASSWORD
    } = authState;

    switch (condition) {
      case LOGIN:
        return (
          <div className="welcome-message">
            <h3>{loginMessage.header}</h3>
            <p>{loginMessage.desc}</p>
          </div>
        );
      case SIGNUP:
        return (
          <div className="welcome-message">
            <h3>{registerMessage.header}</h3>
            <p>{registerMessage.desc}</p>
          </div>
        );
      case VERIFY:
        return (
          <div className="welcome-message">
            <h3>welcome</h3>
            {/* <p>Check your Inbox, We've sent you a verification code</p> */}
          </div>
        );
      case FORGOT_PASSWORD:
        return (
          <div className="welcome-message">
            <h3>welcome</h3>
            {/* <p>Please fill out the form to reset your password</p> */}
          </div>
        );
      case RESET_PASSWORD:
        return (
          <div className="welcome-message">
            <h3>welcome</h3>
            {/* <p>Please fill out the form to reset your password</p> */}
          </div>
        );

      default:
        return;
    }
  };

  render() {
    const { LOGIN, SIGNUP } = authState;
    return (
      <WaveBackground>
        <div className="auth-page-container">
          <div className="auth-reg-container">
            <div className="auth-logo-container">
              <Logo className="auth-logo" id="siteLogo" />
              {this.currMessage(this.state.currentState)}
            </div>
            <div className="auth-form-container">
              <Logo className="auth-logo" id="auth-mobile-logo" />
              {(this.state.currentState === LOGIN ||
                this.state.currentState === SIGNUP) && (
                <div className="auth-switch-button-container">
                  <button
                    className={`switchButton ${this.state.currentState ===
                      SIGNUP && "switch-button-selected"}`} // sets button list's selected button color
                    id="login-half-button"
                    type="button"
                    onClick={() => this.setState({ currentState: LOGIN })}
                  >
                    Log In
                  </button>
                  <button
                    className={`switchButton ${this.state.currentState ===
                      LOGIN && "switch-button-selected"}`} // sets button list's selected button color
                    id="signup-half-button"
                    type="button"
                    onClick={() => this.setState({ currentState: SIGNUP })}
                  >
                    Sign Up
                  </button>
                </div>
              )}
              <div className="auth-forms">
                {this.currForm(this.state.currentState)}
              </div>
            </div>
          </div>
        </div>
      </WaveBackground>
    );
  }
}

export default Auth;
