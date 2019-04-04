import React from 'react'
import { Form, Field } from 'formik'
import '../Components/signUp/styles.css'

const SignUpForm = ({ handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                className="field"
                type="text"
                name="firstName"
                placeholder="Enter first name"
            />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="text"
                name="lastName"
                placeholder="Enter last name"
            />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="email"
                name="email"
                placeholder="Enter your school email"
            />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="password"
                name="password"
                placeholder="Password"
            />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
            />
        </div>
        <div id="submitStyle">
            <button id="submitBtn" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </Form>
)

export default SignUpForm