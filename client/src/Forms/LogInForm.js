import React from 'react'
import { Form, Field } from 'formik'
import '../Components/login/styles.css'

const LogInForm = ({ handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                className="field"
                type="email"
                name="email"
                placeholder="Email"
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
        <div id="loginStyle">
            <button id="loginBtn" type="submit" onClick={ handleSubmit }>Log In</button>
        </div>
    </Form>
)

export default LogInForm