/**
 * Wraps login, forgot password,verify email,resend veriry email code, reset password and signup
 */

import React, { Component } from 'react'
import { WaveBackground } from '../../components'
import Login from './forms/login'
import Register from './forms/register'
import Verify from './forms/verify'
import ForgotPassword from './forms/forgotPassword'
import ResetPassword from './forms/resetPassword'
import ResendCode from './forms/resendCode'
import getMessage from '../../utils/authMessage'
import { ReactComponent as Logo } from '../../assets/logos/organizer/shellhacks.svg'
import authState from './authStates'
import './styles.css'

// Get random welcome message for login and register on page load
const loginMessage = getMessage(true)
const registerMessage = getMessage(false)

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentState: authState.LOGIN
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
    } = authState

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
    } = authState

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
                👋
              </span>
              Hi
            </h2>
            <p>
              If you've already registered, check your Inbox for your email
              verification code
            </p>
          </div>
        )
      case FORGOT_PASSWORD:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
                👋
              </span>
              Hi
            </h2>
            <p>Please fill out the form to reset your password</p>
          </div>
        )
      case RESET_PASSWORD:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
                👋
              </span>
              Welcome
            </h2>
            <p>Please fill out the form to reset your password</p>
          </div>
        )
      case RESEND_VERIFY_CODE:
        return (
          <div className='welcome-message'>
            <h2>
              <span role='img' aria-label='waving hands'>
                👋
              </span>
              Welcome
            </h2>
            <p>
              Please enter your email address to get a new verification code
            </p>
          </div>
        )

      default:
    }
  }

  render () {
    const { LOGIN, SIGNUP } = authState
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
                  <div className='auth-switch-button-container'>
                    <button
                      className={`switchButton ${this.state.currentState ===
                        SIGNUP && 'switch-button-selected'}`} // sets button list's selected button color
                      id='login-half-button'
                      type='button'
                      onClick={() => this.setState({ currentState: LOGIN })}
                    >
                      Log In
                    </button>
                    <button
                      className={`switchButton ${this.state.currentState ===
                        LOGIN && 'switch-button-selected'}`} // sets button list's selected button color
                      id='signup-half-button'
                      type='button'
                      onClick={() => this.setState({ currentState: SIGNUP })}
                    >
                      Sign Up
                    </button>
                  </div>
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
