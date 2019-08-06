/**
 * Signin users
 */

import React, { useState } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Input, Button, BlockError, ButtonLoader } from '../../../components'
import { LogInValidation, LoginInitialValues } from '../../../utils/validations'
import services from '../../../services/routes'
import States from '../states'
import '../styles.css'

const Login = ({ history, setAuthState }) => {
  const { FORGOT_PASSWORD, VERIFY_EMAIL, BAD_REQUEST, FAILED_REQUEST } = States
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
   * @param {Object} values - form data
   */
  const handleSubmit = values => {
    const data = {
      email: values.email,
      password: values.password
    }
    services.login(data, history, submitionFaillure)
  }

  // navigates to forgot password
  let goToforgot = () => {
    setAuthState(FORGOT_PASSWORD)
  }

  // navigates to verify email address
  let goToVerify = () => {
    setAuthState(VERIFY_EMAIL)
  }

  return (
    <Formik
      initialValues={LoginInitialValues}
      validationSchema={LogInValidation}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='auth-form'>
          <BlockError
            errors={[
              // one error at a time
              (touched.email && errors.email) ||
                (touched.password && errors.password) ||
                (badRequest &&
                  'Oof! Something is wrong with those credentials 😬') ||
                (otherFaillure && 'Something went wrong 😕... Your credentials may be incorrect')
            ]}
            shouldShow={
              !!(touched.email && errors.email) ||
              !!(touched.password && errors.password) ||
              badRequest ||
              otherFaillure
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
          <div className='field-div'>
            <Input
              name='password'
              type='password'
              placeholder='Password'
              error={!!touched.password && errors.password}
            />
          </div>
          <div className='auth-submit-button-container'>
            <Button
              type='submit'
              title='Login'
              id='login'
              extraStyles='auth-button-extra-styles'
            />
          </div>
          <div className='auth-question-buttons'>
            <p onClick={goToforgot}>Forgot Password?</p>
            <p onClick={goToVerify}>Need to Verify Email?</p>
          </div>
        </Form>
      )}
    />
  )
}
Login.propTypes = {
  setAuthState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
export default withRouter(Login)
