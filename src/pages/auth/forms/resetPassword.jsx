/**
 * Updates user's password
 */

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { TextInput, Button, BlockError } from '../../../components'
import {
  resetPasswordValidation,
  resetPasswordInitialValues
} from '../../../utils/validations'
import { resetPassword } from '../../../services/routes'
import authState from '../authStates'
import '../styles.css'

const ResetPassword = props => {
  const { BAD_REQUEST, FAILED_REQUEST, FORGOT_PASSWORD, LOGIN } = authState
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

  /**
   * Submits form
   * @param {Object} values - form values
   */
  const handleSubmit = values => {
    let data = {
      email: values.email,
      newPassword: values.password,
      token: values.resetCode
    }
    resetPassword(data, setAuthState, submitionFaillure)
  }

  // navigates to forgot
  const gotToForgot = () => {
    setAuthState(FORGOT_PASSWORD)
  }

  // navigates to login
  const gotToLogin = () => {
    setAuthState(LOGIN)
  }

  return (
    <Formik
      validationSchema={resetPasswordValidation}
      initialValues={resetPasswordInitialValues}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='forgot-form'>
          <div className='welcome-message'>
            <h1>Reset Password</h1>
          </div>
          <BlockError
            errors={[
              // one error at a time
              (touched.resetCode && errors.resetCode) ||
                (touched.email && errors.email) ||
                (touched.password && errors.password) ||
                ((touched.confirmpassword && errors.confirmpassword) ||
                  (badRequest &&
                    'Ummm...🤔 double check your email and Reset Code') ||
                  (otherFaillure && 'Something went wrong 😕'))
            ]}
            shouldShow={
              !!(touched.resetCode && errors.resetCode) ||
              !!(touched.email && errors.email) ||
              !!(touched.password && errors.password) ||
              !!(touched.confirmpassword && errors.confirmpassword) ||
              badRequest ||
              otherFaillure
            }
          />
          <div className='field-div'>
            <TextInput
              name='resetCode'
              type='text'
              placeholder='Reset Code'
              error={!!touched.resetCode && errors.resetCode}
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='email'
              type='email'
              placeholder='Email Address'
              error={!!touched.email && errors.email}
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='password'
              type='password'
              placeholder='New Password'
              error={!!touched.password && errors.password}
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='confirmpassword'
              type='password'
              placeholder='Confirm New Password'
              error={!!touched.confirmpassword && errors.confirmpassword}
            />
          </div>
          <div className='auth-question-buttons'>
            <p onClick={gotToForgot}>Get a New Reset Code</p>
            <p onClick={gotToLogin}>Go Back to Login</p>
          </div>
          <div className='auth-submit-button-container'>
            <Button
              title='Reset Password'
              type='submit'
              id='register-success'
              extraStyles='auth-button-extra-styles'
            />
          </div>
        </Form>
      )}
    />
  )
}

ResetPassword.propTypes = {
  setAuthState: PropTypes.func.isRequired
}
export default ResetPassword
