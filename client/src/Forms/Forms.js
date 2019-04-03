import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'

export const LogInForm = ({ errors, touched, handleSubmit }) => (
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

export const SignUpForm = ({ errors, touched, handleSubmit }) => (
    <Form>
        <div className="fieldDiv">
            <Field
                className="field"
                type="text"
                name="firstName"
                style={{ borderColor: errors.firstName && touched.firstName ? 'red' : null }}
                placeholder="Enter first name"
            />
            <ErrorMessage component="p" name="firstName" />
        </div>
        <div className="fieldDiv">
            <Field
                className="field"
                type="text"
                name="lastName"
                style={{ borderColor: errors.lastName && touched.lastName ? 'red' : null }}
                placeholder="Enter last name"
            />
            <ErrorMessage component="p" name="lastName" />
        </div>
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
        <div className="fieldDiv">
            <Field
                className="field"
                type="password"
                name="confirmPassword"
                style={{ borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : null }}
                placeholder="Confirm password"
            />
            <ErrorMessage component="p" name="confirmPassword" />
        </div>
        <br /><br />
        <div className="buttonDiv">
            <button id="submitBtn" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </Form>
)