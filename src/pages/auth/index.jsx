/**
 * Wraps login, forgot password,verify email,resend veriry email code, reset password and signup
 */

import React, { Component } from 'react'
import { WaveBackground, Switch } from '../../components'
import Login from './forms/login'
import Register from './forms/register'
import Verify from './forms/verify'
import ForgotPassword from './forms/forgotPassword'
import ResetPassword from './forms/resetPassword'
import ResendCode from './forms/resendCode'
import mixed from '../../utils/mixed'
import { ReactComponent as Logo } from '../../assets/logos/organizer/shellhacks.svg'
import States from './states'
import './styles.css'

// Get random welcome message for login and register on page load
const loginMessage = mixed.getMessage(true)
const registerMessage = mixed.getMessage(false)

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentState: States.LOGIN
    }

    this.setAuthState = this.setAuthState.bind(this)
  }

  /**
   * Update state to new state
   * @param {String} - new state
   */
  setAuthState = newState => {
    this.setState({ currentState: newState })
  }

  /**
   * Decides which form to show
   * @param {String} state - current state
   */
  currForm = state => {
    const {
      VERIFY_EMAIL,
      FORGOT_PASSWORD,
      LOGIN,
      SIGNUP,
      RESET_PASSWORD,
      RESEND_VERIFY_CODE
    } = States

    let props = {
      setAuthState: this.setAuthState
    }

    switch (state) {
      case LOGIN:
        return <Login {...props} />
      case SIGNUP:
        return <Register {...props} />
      case VERIFY_EMAIL:
        return <Verify {...props} />
      case FORGOT_PASSWORD:
        return <ForgotPassword {...props} />
      case RESEND_VERIFY_CODE:
        return <ResendCode {...props} />
      case RESET_PASSWORD:
        return <ResetPassword {...props} />
      default:
    }
  }

  /**
   * Decides which messages to show on the form
   * @param {String} state - current state
   */
  currMessage = state => {
    const {
      VERIFY_EMAIL,
      FORGOT_PASSWORD,
      LOGIN,
      SIGNUP,
      RESET_PASSWORD,
      RESEND_VERIFY_CODE
    } = States
    switch (state) {
      case LOGIN:
        return (
          <div className='welcome-message'>
            <h2>{loginMessage.header}</h2>
            <p>{loginMessage.desc}</p>
          </div>
        )
      case SIGNUP:
        return (
          <div className='welcome-message'>
            <h2>{registerMessage.header}</h2>
            <p>{registerMessage.desc}</p>
          </div>
        )
      case VERIFY_EMAIL:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
                📬{" "}
              </span>
              Almost There!
            </h2>
            <p>Check your inbox for your verification code</p>
          </div>
        )
      case FORGOT_PASSWORD:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
                😱{" "}
              </span>
              Oh no!
            </h2>
            <p>Please enter your email address to reset your password</p>
          </div>
        )
      case RESET_PASSWORD:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
              😌{" "}
              </span>
              Almost there!
            </h2>
            <p>Check your inbox for your reset code</p>
          </div>
        )
      case RESEND_VERIFY_CODE:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
              📬{" "}
              </span>
            Almost There!
            </h2>
            <p>Please enter your email address to get a new code</p>
          </div>
        )

      default:
    }
  }

  render () {
    const { LOGIN, SIGNUP } = States
    return (
      <section>
        <WaveBackground>
          <div className='auth-page-container'>
            <div className='auth-reg-container'>
              <div className='auth-logo-container'>
                <Logo className='auth-logo' id='siteLogo' />
                {this.currMessage(this.state.currentState)}
              </div>
              <div className='auth-form-container'>
                <Logo className='auth-logo' id='auth-mobile-logo' />
                {(this.state.currentState === LOGIN ||
                  this.state.currentState === SIGNUP) && (
                  <Switch
                    titleOne='Login'
                    titleTwo='Register'
                    action={param => {
                      param === 'left'
                        ? this.setAuthState(LOGIN)
                        : this.setAuthState(SIGNUP)
                    }}
                  />
                )}
                <div className='auth-forms'>
                  {this.currForm(this.state.currentState)}
                </div>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>
    )
  }
}

export default Auth
