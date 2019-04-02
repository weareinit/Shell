import React, { Component }from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { LogInValidation } from '../../Validator/ValidationSchema'
import axios from 'axios'
import './styles.css'

class LogIn extends Component {

    handleSubmit(values, { resetForm }) {
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

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={ LogInValidation }
                onSubmit={ this.handleSubmit }
                render={ ({ errors, touched, handleSubmit }) => (
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
                )}
            />
        )
    }
}

export default LogIn