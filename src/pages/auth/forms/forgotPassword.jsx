/**
 * Updates user's password
 */

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { TextInput, Button, BlockError } from '../../../components'
import {
  forgotPasswordValidation,
  forgotPasswordInitialValues
} from '../../../utils/validations'
import { forgotPassword } from '../../../services/routes'
import authState from '../authStates'
import '../styles.css'

const ForgotPassword = props => {
  const { BAD_REQUEST, FAILED_REQUEST, RESET_PASSWORD, LOGIN } = authState
  const { setAuthState } = props
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
    forgotPassword(data, setAuthState, submitionFaillure)
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
      validationSchema={forgotPasswordValidation}
      initialValues={forgotPasswordInitialValues}
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
                  'Ummm...🤔 This email address is already been added to our databases') ||
                (otherFaillure && 'Something went wrong 😕')
            ]}
            shouldShow={
              !!(errors.email && touched.email) || badRequest || otherFaillure
            }
          />
          <div className='field-div'>
            <TextInput
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
