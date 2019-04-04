import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'

const LogInForm = ({ errors, touched, handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                className="field"
                type="email"
                name="email"
                style={{ borderColor: errors.email && touched.email ? 'red' : null }}
                placeholder="Enter your school email"
            />
            <ErrorMessage component="p" name="email" />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="password"
                name="password"
                style={{ borderColor: errors.password && touched.password ? 'red' : null }}
                placeholder="Enter password"
            />
            <ErrorMessage component="p" name="password" />
        </div>
        <br /><br />
        <div className="buttonDiv">
            <button id="submitBtn" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </Form>
)

export default LogInForm