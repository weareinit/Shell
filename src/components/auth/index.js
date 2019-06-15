import React, { Component, Fragment } from "react";

import { WaveBackground } from "../common";
import LogIn from "./login";
import SignUp from "./signup";
import { ReactComponent as Logo } from "../../assets/frontpage/shellhacks.svg";
import "./style.css";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true,
        }

    };

    goToDashboard = () => (this.props.history.push("/dashboard"));

    render() {
        let form = this.state.showLogIn ? <LogIn nextPath={this.goToDashboard.bind(this)} /> : <SignUp nextPath={this.nextPath} />
        let details = this.state.showLogIn ? <p>{"Please sign in"}</p> : <p>{"Please fill out the form"}</p>

        return (
            <Fragment>
                <WaveBackground>
                    <div className="auth-container">
                        <div className="regContainer">
                            <div className="Logo">
                                <Logo className="logoStyle" id="siteLogo" />
                                <span className="welcomeMessage">
                                    <h1>Welcome!</h1>
                                    {details}
                                </span>
                            </div>
                            <div className="formContainer">
                                <Logo className="logoStyle" id="mobileLogo" />
                                <div className="buttonSwitch">
                                    <button
                                        className="switchButtons"
                                        id="logInBtn"
                                        type="button"
                                        alt="placeholder"
                                        style={!this.state.showLogIn ? { backgroundColor: "#cec09c" } : null}
                                        onClick={() => this.setState({ showLogIn: true })}>Log In</button>
                                    <button
                                        className="switchButtons"
                                        id="signUpBtn"
                                        type="button"
                                        style={this.state.showLogIn ? { backgroundColor: "#cec09c" } : null}
                                        onClick={() => this.setState({ showLogIn: false })}>Sign Up</button>
                                </div>
                                <div className="forms">
                                    {form}
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
