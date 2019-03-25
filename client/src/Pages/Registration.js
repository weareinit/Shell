import React, { Component } from 'react'
import { LogInForm } from '../Components/LogIn';
import { SignUpForm } from '../Components/SignUp';

class Registration extends Component {

    constructor(props){
        super(props)
        this.switchComponent = this.switchComponent.bind(this)
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
        let component = this.state.showLogIn ? 
        <LogInForm componentChange={this.switchComponent}/> : 
        <SignUpForm componentChange={this.switchComponent}/>
        return(
            <div>
                {component}
            </div>
        )
    }
}

export default Registration