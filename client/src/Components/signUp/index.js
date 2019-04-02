import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SignUpValidation } from '../../Validator/ValidationSchema'
import axios from 'axios'
import './styles.css'

class SignUp extends Component {

    handleSubmit(values, { resetForm, setErrors }) {
        if (values.password !== values.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" });
        }
        else {
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            })
            .then(response => {
                resetForm()
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={ SignUpValidation }
                onSubmit={ this.handleSubmit }
                render={ ({ errors, touched, handleSubmit }) => (
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
                )}
            />
        )
    }
}

export default SignUp