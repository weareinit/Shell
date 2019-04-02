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
            <div className="regContainer">
                <div className="detailContainer">
                    <Logo className="logoStyle" id="siteLogo" />
                    <h1>Welcome!</h1>
                    {details}
                </div>
                <Logo className="logoStyle" id="mobileLogo" />
                <div className="formContainer">
                    <div className="buttons">
                        <button 
                            style={ { backgroundColor: this.state.showLogIn ? '#968e9e' : '#d7cce2' } }
                            id="signUpBtn" 
                            type="button" 
                            onClick={ () => this.setState({ showLogIn: true })}>Log In</button>
                        <button 
                            style={{ backgroundColor: !this.state.showLogIn ? '#968e9e' : '#d7cce2' } }
                            id="logInBtn" 
                            type="button" 
                            onClick={ () => this.setState({ showLogIn: false }) }>Sign Up</button>
                    </div>
                    <div className="forms">
                        {form}
                    </div>
                    <div id="submitStyle">
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration