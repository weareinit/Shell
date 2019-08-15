/**
 * Register user account
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Button, Input, BlockError } from '../../../components'
import {
  SignUpValidation,
  SignUpInitialValues
} from '../../../utils/validations'
import services from '../../../services/routes'
import '../styles.css'
import States from '../states'

const Register = ({ setAuthState }) => {
  const { BAD_REQUEST, FAILED_REQUEST, VERIFY_EMAIL, FORGOT_PASSWORD } = States
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
   * Submits registration form
   * @param {Object} values - form values
   */
  const handleSubmit = values => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }

  services.register(data, setAuthState, submitionFaillure)
  }

  return (
    <Formik
      initialValues={SignUpInitialValues}
      validationSchema={SignUpValidation}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className='auth-form'>
          <BlockError
            errors={[
              // one error at a time
              (touched.firstName && errors.firstName) ||
                (touched.lastName && errors.lastName) ||
                (touched.email && errors.email) ||
                (touched.password && errors.password) ||
                (touched.confirmPassword && errors.confirmPassword) ||
                (badRequest &&
                  'Ummm...🤔 That email address is  already in use, try resetting your password') ||
                (otherFaillure && 'Something went wrong 😕... Sure you don\'t already have an account?')
            ]}
            shouldShow={
              !!(touched.firstName && errors.firstName) ||
              !!(touched.lastName && errors.lastName) ||
              !!(touched.email && errors.email) ||
              !!(touched.password && errors.password) ||
              !!(touched.confirmPassword && errors.confirmPassword) ||
              badRequest ||
              otherFaillure
            }
          />
          <div className='field-div'>
            <Input
              name='firstName'
              type='text'
              error={!!touched.firstName && errors.firstName}
              placeholder='First Name'
            />
          </div>
          <div className='field-div'>
            <Input
              name='lastName'
              type='text'
              error={!!touched.lastName && errors.lastName}
              placeholder='Last Name'
            />
          </div>
          <div className='field-div'>
            <Input
              name='email'
              type='email'
              error={!!touched.email && errors.email}
              placeholder='Email Address'
            />
          </div>
          <div className='field-div'>
            <Input
              name='password'
              type='password'
              error={!!touched.password && errors.password}
              placeholder='Password'
            />
          </div>
          <div className='field-div'>
            <Input
              name='confirmPassword'
              type='password'
              error={!!touched.confirmPassword && errors.confirmPassword}
              placeholder='Confirm Password'
            />
          </div>
          <div className='auth-submit-button-container'>
            <Button
              title='Register'
              type='submit'
              id='signup'
              extraStyles='auth-button-extra-styles'
            />
          </div>
        </Form>
      )}
    />
  )
}
Register.propTypes = {
  setAuthState: PropTypes.func.isRequired
}
export default Register
