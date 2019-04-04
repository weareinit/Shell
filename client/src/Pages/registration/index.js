import React, { Component } from 'react'
import { LogInForm } from '../../Components/login';
import { SignUpForm } from '../../Components/signUp';
import "./styles.css"
import { ReactComponent as Logo } from '../../shellhacks.svg';


class Registration extends Component {

    constructor(props) {
        super(props);
        this.switchComponent = this.switchComponent.bind(this);
        this.state = {
            showLogIn: true
        }
    }


    switchComponent() {
        this.setState({
            showLogIn: !this.state.showLogIn
        })
    }

    render() {
        let splash = this.state.showLogIn ? <LogInForm componentChange={this.switchComponent} /> : <SignUpForm componentChange={this.switchComponent} />
        let details = this.state.showLogIn ? <p>Please sign in</p> : <p>Please fill out the form</p>

        return (
            <div className="background">
                {/* BACKGROUND ANIMATIONS  */}
                <div className="container" id="backgroundObjects">
                    <div id="shore">
                        <div id="wetsand">
                            <img id="wetsand3" className="decor" src={require('../../imgs/frontpage/wetsand3.svg')} />
                            <img id="wetsand2" className="decor" src={require('../../imgs/frontpage/wetsand2.svg')} />
                            <img id="wetsand1" className="decor" src={require('../../imgs/frontpage/wetsand1.svg')} />
                        </div>
                        <div id="surf">
                            <img id="surf3" className="decor" src={require('../../imgs/frontpage/surf3.svg')} />
                            <img id="surf2" className="decor" src={require('../../imgs/frontpage/surf2.svg')} />
                            <img id="surf1" className="decor" src={require('../../imgs/frontpage/surf1.svg')} />
                        </div>
                    </div>
                </div>
                {/* ANIMATIONS ANDS */}

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

                                <button className="switchButtons" id="logInBtn" type="button" onClick={() => this.setState({ showLogIn: true })}>Log In</button>

                                <button className="switchButtons" id="signUpBtn" type="button" onClick={() => this.setState({ showLogIn: false })}>Sign Up</button>
                            </div>

                            <div className="forms">
                                {splash}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Registration;

