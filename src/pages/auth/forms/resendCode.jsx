/**
 * Resend email verification code
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Input, Button, BlockError } from '../../../components'
import {
  ForgotPasswordValidation,
  ForgotPasswordInitialValues
} from '../../../utils/validations'
import services from '../../../services/routes'
import States from '../states'
import '../styles.css'

const ResendCode = ({ setAuthState }) => {
  const { BAD_REQUEST, FAILED_REQUEST, LOGIN, VERIFY_EMAIL } = States
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

  /**
   * Submits form
   * @param {Object} values - form values
   */
  const handleSubmit = values => {
    let data = { email: values.email }
    services.resendCode(data, setAuthState, submitionFaillure)
  }

  // navigates to login
  const goToLogin = () => {
    setAuthState(LOGIN)
  }

  // navigates to verify email
  const goToVerify = () => {
    setAuthState(VERIFY_EMAIL)
  }

  return (
    <Formik
      validationSchema={ForgotPasswordValidation}
      initialValues={ForgotPasswordInitialValues}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='forgot-form'>
          <div className='welcome-message'>
            <h1>Resend Email Verification Code</h1>
          </div>
          <BlockError
            errors={[
              errors.email ||
                (badRequest &&
                  "Ummm...🤔 We couldn't find your email address") ||
                (otherFaillure && 'Something went wrong...Try again! 😕')
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
          <div className='auth-submit-button-container'>
            <Button
              title='Send Code'
              type='submit'
              id='forgot-password'
              extraStyles='auth-button-extra-styles'
            />
          </div>
          <div className='auth-question-buttons'>
            <p onClick={goToVerify}>Have a Verification Code?</p>
            <p onClick={goToLogin}>Go Back to Login</p>
          </div>
        </Form>
      )}
    />
  )
}
ResendCode.propType = {
  setAuthState: PropTypes.func.isRequired
}
export default ResendCode
