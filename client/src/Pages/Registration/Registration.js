import React, { Component,Fragment} from 'react'
import { LogInForm } from '../../Components/LogIn';
import { SignUpForm } from '../../Components/SignUp';
import './styles.css'

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
            <div id='registration'>
                <div className='greeting'>
                    <div className='headline'>
                        <h4>Hell Hacks</h4>
                        {
                            this.state.showLogIn ?
                            <Fragment>
                                <h3>Welcome Back!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            </Fragment>
                            :
                            <Fragment>
                                <h3>Hello Friend!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            </Fragment>
                        }
                    </div>
                </div>
                <div className='forms'>
                    <div className='form-container'>
                        <div className='button-container'>
                            <button 
                                style={{
                                    backgroundColor: !this.state.showLogIn ? '#bbb' : '#ccc'
                                }}
                            onClick={this.switchComponent}>Sign Up</button>
                            <button
                                style={{
                                    backgroundColor: this.state.showLogIn ? '#bbb' : '#ccc'
                                }}
                            
                            onClick={this.switchComponent}>Sign In</button>
                        </div>
                        {component}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Registration