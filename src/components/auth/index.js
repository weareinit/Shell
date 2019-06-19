import React, { Component, Fragment } from "react";

import { WaveBackground } from "../common";
import Login from "./login";
import SignUp from "./signup";
import Success from "./success";

// import querries from "../../utils/querries";
import getMessage from "../../utils/authMessage";

import { ReactComponent as Logo } from "../../assets/frontpage/shellhacks.svg";
import "./style.css";


//assign a message
const loginMessage = getMessage(true);
const registerMessage = getMessage(false);

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true,
            showSuccess: true,

        }
        this.shouldSuccessShow = this.shouldSuccessShow.bind(this);
    };

    shouldSuccessShow(condition) {
        if (condition) {
            this.setState(prevState => ({ showSuccess: !prevState.showSuccess }))
        }
    }


    render() {
        let currentView;
        currentView = (this.state.showLogIn ? <Login /> : <SignUp showSuccess={this.shouldSuccessShow} />)
        let details = this.state.showLogIn ? <pre>{loginMessage}</pre> : <pre>{registerMessage}</pre>

        if (this.state.showSuccess)
            return (<Success showSuccess={this.shouldSuccessShow} />)
        else
            return (
                <Fragment>
                    <WaveBackground>
                        <div className="auth-container">
                            <div className="auth-reg-container">
                                <div className="auth-logo-container">
                                    <Logo className="auth-logo" id="siteLogo" />
                                    <span className="welcome-message">
                                        {details}
                                    </span>
                                </div>
                                <div className="auth-form-container">
                                    <Logo className="auth-logo" id="auth-mobile-logo" />
                                    <div className="auth-switch-button-container">
                                        <button
                                            className="switchButtons"
                                            id="login-half-button"
                                            type="button"
                                            alt="placeholder"
                                            style={!this.state.showLogIn ? { backgroundColor: "#9E8D7D" } : null}
                                            onClick={() => this.setState({ showLogIn: true })}>Log In</button>
                                        <button
                                            className="switchButtons"
                                            id="signup-half-button"
                                            type="button"
                                            style={this.state.showLogIn ? { backgroundColor: "#9E8D7D" } : null}
                                            onClick={() => this.setState({ showLogIn: false })}>Sign Up</button>
                                    </div>
                                    <div className="auth-forms">
                                        {currentView}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WaveBackground>
                </Fragment>
            );
    }
}

export default Auth;
