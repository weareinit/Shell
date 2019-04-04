import React, { Component } from 'react'
import LogIn from '../../Components/login'
import SignUp from '../../Components/signUp'
import { ReactComponent as Logo } from '../../imgs/shellhacks.svg'
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
                                <button className="switchButtons" id="logInBtn" type="button" onClick={ () => this.setState({ showLogIn: true }) }>Log In</button>
                                <button className="switchButtons" id="signUpBtn" type="button" onClick={ () => this.setState({ showLogIn: false }) }>Sign Up</button>
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

export default Registration
