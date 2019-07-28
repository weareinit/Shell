/**
 * Register user account
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Button, TextInput, BlockError } from '../../../components'
import {
  SignUpValidation,
  SignUpInitialValues
} from '../../../utils/validations'
import { register } from '../../../services/routes'
import '../styles.css'
import authState from '../authStates'

const Register = props => {
  const [otherFaillure, setOtherFaillure] = useState(false)
  const [badRequest, setBadRequest] = useState(false)

  /**
   * Shows error for 15 secs on submittion faillures
   * @param {String} problem - submition success
   */
  const submitionFaillure = problem => {
    const { BAD_REQUEST, FAILED_REQUEST } = authState
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

    register(data, props.setAuthState, submitionFaillure)
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
                (otherFaillure && 'Something went wrong 😕')
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
            <TextInput
              name='firstName'
              type='text'
              error={!!touched.firstName && errors.firstName}
              placeholder='First Name'
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='lastName'
              type='text'
              error={!!touched.lastName && errors.lastName}
              placeholder='Last Name'
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='email'
              type='email'
              error={!!touched.email && errors.email}
              placeholder='Email Address'
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='password'
              type='password'
              error={!!touched.password && errors.password}
              placeholder='Password'
            />
          </div>
          <div className='field-div'>
            <TextInput
              name='confirmPassword'
              type='password'
              error={!!touched.confirmPassword && errors.confirmPassword}
              placeholder='Confirm password'
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
