/**
 * Updates user's password
 */

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { Input, Button, BlockError } from '../../../components'
import {
  ForgotPasswordValidation,
  ForgotPasswordInitialValues
} from '../../../utils/validations'
import services from '../../../services/routes'
import States from '../states'
import '../styles.css'

const ForgotPassword = ({ setAuthState }) => {
  const { BAD_REQUEST, FAILED_REQUEST, RESET_PASSWORD, LOGIN } = States
  const [otherFaillure, setOtherFaillure] = useState(false)
  const [badRequest, setBadRequest] = useState(false)

  /**
   * Shows error for 15 secs on submittion faillures
   * @param {String} problem - submition success
   */
  const submitionFaillure = problem => {
    if (problem === BAD_REQUEST) {
      setBadRequest(true)
      setTimeout(() => {
        setBadRequest(false)
      }, 15000) // remove error from screen
    }
    if (problem === FAILED_REQUEST) {
      setOtherFaillure(true)
      setTimeout(() => {
        setOtherFaillure(false)
      }, 15000) // remove error from screen
    }
  }

  // request a token to reset password
  const handleSubmit = values => {
    const data = { email: values.email }
    services.forgotPassword(data, setAuthState, submitionFaillure)
  }

  // navigates to Reset password
  const goToReset = () => {
    setAuthState(RESET_PASSWORD)
  }

  // navigates to login
  const goToLogin = () => {
    setAuthState(LOGIN)
  }

  return (
    <Formik
      validationSchema={ForgotPasswordValidation}
      initialValues={ForgotPasswordInitialValues}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='forgot-form'>
          <div className='welcome-message'>
            <h1>Forgot Password</h1>
          </div>

          <BlockError
            errors={[
              errors.email ||
                (badRequest &&
                  'Ummm...🤔 Something is wrong with that email address, have you registered yet?') ||
                (otherFaillure && 'Something went wrong 😕')
            ]}
            shouldShow={
              !!(errors.email && touched.email) || badRequest || otherFaillure
            }
          />
          <div className='field-div'>
            <Input
              name='email'
              type='email'
              placeholder='Email Address'
              error={!!touched.email && errors.email}
            />
          </div>
          <div className='auth-question-buttons'>
            <p onClick={goToReset}>Have a Reset Code</p>
            <p onClick={goToLogin}>Go Back to Login</p>
          </div>
          <div className='auth-submit-button-container'>
            <Button
              title='Send Code'
              type='submit'
              id='forgot-password'
              extraStyles='auth-button-extra-styles'
            />
          </div>
        </Form>
      )}
    />
  )
}

ForgotPassword.propTypes = {
  setAuthState: PropTypes.func.isRequired
}
export default ForgotPassword
