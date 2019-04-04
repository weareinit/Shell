import React, { Component } from 'react'
import LogIn from '../../Components/login'
import SignUp from '../../Components/signUp'
import { ReactComponent as Logo } from '../../shellhacks.svg'
import './styles.css'

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true
        }
    }

    render() {
        let form = this.state.showLogIn ? <LogIn /> : <SignUp />
        let details = this.state.showLogIn ? <p>Please sign in</p> : <p>Please fill out the form</p>

        return (
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
                            <button className = "switchButtons" id="logInBtn" type="button" onClick={ () => this.setState({ showLogIn: true })}>Log In</button>
                            <button className = "switchButtons" id="signUpBtn" type="button" onClick={ () => this.setState({ showLogIn: false })}>Sign Up</button>
                        </div>
                        <div className="forms">
                            {form}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration
