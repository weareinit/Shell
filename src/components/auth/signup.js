import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { SignUpValidation } from '../../utils/ValidationSchema'
import axios from 'axios'
import './styles.css'

class SignUp extends Component {

    handleSubmit(values, { resetForm }) {
        if (values.password !== values.confirmPassword) {
            alert("Passwords do not match!")
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
                    console.log(error)
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
                validationSchema={SignUpValidation}
                onSubmit={this.handleSubmit}
                render={({ touched, errors, handleSubmit }) => (
                    // <SignUpForm {...props} />
                    <Form className="auth-form">
                        <div className="fieldDiv">
                            <Field
                                name="firstName"
                                type="text"
                                className="field"
                                style={touched.firstName && errors.firstName ? { border: '2px solid red' } : null}
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="fieldDiv">
                            <Field
                                name="lastName"
                                type="text"
                                className="field"
                                style={touched.lastName && errors.lastName ? { border: '2px solid red' } : null}
                                placeholder="Enter last name"
                            />
                        </div>
                        <div className="fieldDiv">
                            <Field
                                name="email"
                                type="email"
                                className="field"
                                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                                placeholder="Enter your school email"
                            />
                        </div>
                        <div className="fieldDiv">
                            <Field
                                name="password"
                                type="password"
                                className="field"
                                style={touched.password && errors.password ? { border: '2px solid red' } : null}
                                placeholder="Password"
                            />
                        </div>
                        <div className="fieldDiv">
                            <Field
                                name="confirmPassword"
                                type="password"
                                className="field"
                                style={touched.confirmPassword && errors.confirmPassword ? { border: '2px solid red' } : null}
                                placeholder="Confirm password"
                            />
                        </div>
                        <div className="auth-submit-button-container">
                            <button className="auth-submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default SignUp