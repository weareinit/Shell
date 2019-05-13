import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { LogInValidation } from '../../utils/ValidationSchema'
import './style.css'
import axios from 'axios'
import client from '../../services/request'
export default class LogIn extends Component {

    nextPath(path) {
        this.props.history.push(path);
    }


    handleSubmit(values, { resetForm }) {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
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

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LogInValidation}
                onSubmit={this.handleSubmit}
                render={({ touched, errors, handleSubmit }) => (
                    // <LogInForm {...props}/>
                    <Form>
                        <div className="fieldDiv">
                            <Field
                                name="email"
                                type="email"
                                className="field"
                                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                                placeholder="Email"
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
                        <div className="auth-submit-button-container">
                            <button className="auth-submit-button" type="submit" onClick={{ handleSubmit }}>Log In</button>
                        </div>
                    </Form>

                )}
            />
        )
    }
}