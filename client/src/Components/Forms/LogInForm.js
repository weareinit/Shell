import React from 'react'
import { Form, Field } from 'formik'
import '../login/styles.css'

const LogInForm = ({ touched, errors, handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                name="email"
                type="email"
                className="field"
                style={ touched.email && errors.email ? { border: '2px solid red' } : null }
                placeholder="Email"
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
        <div id="loginStyle">
            <button id="loginBtn" type="submit" onClick={ handleSubmit }>Log In</button>
        </div>
    </Form>
)

export default LogInForm