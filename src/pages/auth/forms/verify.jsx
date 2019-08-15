/**
 * Renders after a successful registration
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Input, Button, BlockError } from '../../../components'
import {
  RegistrationCodeValidation,
  RegistrationCodeInitialValues
} from '../../../utils/validations'
import services from '../../../services/routes'
import States from '../states'
import '../styles.css'

const Verify = ({ setAuthState }) => {
  const { BAD_REQUEST, FAILED_REQUEST, LOGIN, RESEND_VERIFY_CODE } = States
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
   * submits form values
   * @param {Object} values - form values
   */
  const handleSubmit = values => {
    let data = {
      emailConfirmationToken: values.verificationCode,
      email: values.email
    }
    services.verifyEmail(data, setAuthState, submitionFaillure)
  }

  // navigates to login
  const goToLogin = () => {
    setAuthState(LOGIN)
  }

  // navigates to resend code
  const goToResend = () => {
    setAuthState(RESEND_VERIFY_CODE)
  }

  return (
    <Formik
      validationSchema={RegistrationCodeValidation}
      initialValues={RegistrationCodeInitialValues}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='success-form'>
          <div className='welcome-message'>
            <h1>Verify Email</h1>
          </div>
          <BlockError
            errors={[
              errors.email ||
                errors.verificationCode ||
                (badRequest &&
                  "Ummm...🤔 Something's with the information you provided") ||
                (otherFaillure && 'Something went wrong 😕')
            ]}
            shouldShow={
              !!(errors.email && touched.email) ||
              !!(errors.verificationCode && touched.verificationCode) ||
              badRequest ||
              otherFaillure
            }
          />
          <div className='field-div'>
            <Input
              name='email'
              type='eamil'
              placeholder='Email Address'
              error={!!touched.email && errors.email}
            />
          </div>
          <div className='field-div'>
            <Input
              name='verificationCode'
              type='text'
              placeholder='Email Verification Code'
              error={!!touched.verificationCode && errors.verificationCode}
            />
          </div>
          <div className='auth-submit-button-container'>
            <Button
              title='Activate Account'
              type='submits'
              id='register-success'
              extraStyles='auth-button-extra-styles'
            />
          </div>
          <div className='auth-question-buttons'>
            <p onClick={goToResend}>Need a New Code?</p>
            <p onClick={goToLogin}>Go Back to Login</p>
          </div>
        </Form>
      )}
    />
  )
}
Verify.propType = {
  setAuthState: PropTypes.func.isRequired
}
export default Verify
