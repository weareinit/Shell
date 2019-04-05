import React from 'react'
import { Form, Field } from 'formik'
import '../signUp/styles.css'

const SignUpForm = ({ touched, errors, handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                name="firstName"
                type="text"
                className="field"               
                style={ touched.firstName && errors.firstName ? { border: '2px solid red' } : null }
                placeholder="Enter first name"
            />
        </div>
        <div className="fieldDiv">
            <Field
                name="lastName"
                type="text"
                className="field"
                style={ touched.lastName && errors.lastName ? { border: '2px solid red' } : null }
                placeholder="Enter last name"
            />
        </div>
        <div className="fieldDiv">
            <Field
                name="email"
                type="email"
                className="field"
                style={ touched.email && errors.email ? { border: '2px solid red' } : null }
                placeholder="Enter your school email"
            />
        </div>
        <div className="fieldDiv">
            <Field
                name="password"
                type="password"
                className="field"
                style={ touched.password && errors.password ? { border: '2px solid red' } : null }
                placeholder="Password"
            />
        </div>
        <div className="fieldDiv">
            <Field
                name="confirmPassword"
                type="password"
                className="field"
                style={ touched.confirmPassword && errors.confirmPassword ? { border: '2px solid red' } : null }
                placeholder="Confirm password"
            />
        </div>
        <div id="submitStyle">
            <button id="submitBtn" type="submit" onClick={ handleSubmit }>Submit</button>
        </div>
    </Form>
)

export default SignUpForm