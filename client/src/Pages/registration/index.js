import React, { Component } from 'react'
import { LogInForm } from '../../Components/login';
import { SignUpForm } from '../../Components/signUp';
import "./styles.css" 
import { ReactComponent as Logo } from '../../shellhacks.svg';

class Registration extends Component {

    constructor(props){
        super(props);
        this.switchComponent = this.switchComponent.bind(this);
        this.state = {
            showLogIn: true
        }
    }


    switchComponent(){
        this.setState({
            showLogIn: !this.state.showLogIn
        })
    }
    
    render(){
        let splash = this.state.showLogIn ? <LogInForm componentChange={this.switchComponent}/> : <SignUpForm componentChange={this.switchComponent}/>
        let details = this.state.showLogIn ? <p>Please sign in</p> : <p>Please fill out the form</p>
        return(
            <div className = "regContainer">
                <div className = "detailContainer">
                    <Logo className = "logoStyle" id = "siteLogo"/>
                    <h1>Welcome!</h1>
                    {details}
                </div>
                <div className = "formContainer">
                    <div>

                        <Logo className= "logoStyle" id = "mobileLogo"/>
                        
                        <button style ={{
                            backgroundColor: this.state.showLogIn ? '#968e9e' : '#d7cce2'
                        }}
                        id = "signUpBtn" type="button" onClick={() => this.setState({showLogIn: true})}>Log In</button>
                        <button style ={{
                            backgroundColor: !this.state.showLogIn ? '#968e9e' : '#d7cce2'
                        }}
                        id = "logInBtn" type="button" onClick={() => this.setState({showLogIn: false})}>Sign Up</button>
                    </div>
                    {splash}
                    
                    <button id = "submitBtn" type="submit">Submit</button>
                </div>
                
            </div>
        
        )
    }
}

export default Registration;