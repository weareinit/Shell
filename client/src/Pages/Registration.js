import React, { Component, Fragment } from 'react'
import SignUp from '../Components/SignUp'
import LogIn from '../Components/LogIn'

class Registration extends Component {

    render() {
      return (
          <Fragment>
                <SignUp />
                <LogIn />
          </Fragment>
      );
    }
  }
  
  export default Registration;