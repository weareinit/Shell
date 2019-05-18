import React, { Component } from 'react'
import LogIn from './login'
import SignUp from './signup'
import { ReactComponent as Logo } from '../../assets/frontpage/shellhacks.svg'
import './style.css'

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true,
        }

    }

    goToDashboard = () => (this.props.history.push("/dashboard"))

    render() {
        let form = this.state.showLogIn ? <LogIn nextPath={this.goToDashboard.bind(this)} /> : <SignUp nextPath={this.nextPath} />
        let details = this.state.showLogIn ? <p>Please sign in</p> : <p>Please fill out the form</p>

        return (
            <div className="background">
                {/* BACKGROUND ANIMATIONS  */}
                <div className="container" id="backgroundObjects">
                    <div id="shore">
                        <div id="wetsand">
                            <img id="wetsand3" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand3.svg')} />
                            <img id="wetsand2" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand2.svg')} />
                            <img id="wetsand1" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand1.svg')} />
                        </div>
                        <div id="surf">
                            <img id="surf3" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf3.svg')} />
                            <img id="surf2" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf2.svg')} />
                            <img id="surf1" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf1.svg')} />
                        </div>
                    </div>
                </div>
                {/* ANIMATIONS ENDS */}
                <div className="container">
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
                                    style={!this.state.showLogIn ? { backgroundColor: '#cec09c' } : null}
                                    onClick={() => this.setState({ showLogIn: true })}>Log In</button>
                                <button
                                    className="switchButtons"
                                    id="signUpBtn"
                                    type="button"
                                    style={this.state.showLogIn ? { backgroundColor: '#cec09c' } : null}
                                    onClick={() => this.setState({ showLogIn: false })}>Sign Up</button>
                            </div>
                            <div className="forms">
                                {form}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;
