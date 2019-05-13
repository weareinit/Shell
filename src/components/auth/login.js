import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { LogInValidation } from '../../utils/ValidationSchema'
import './style.css'
import { LOGIN_PATH } from '../../config/api_paths'
import request from '../../services/request'

export default class LogIn extends Component {

    nextPath = (path) => {
        this.props.history.push(path);
    }

    handleSubmit(values, { resetForm }) {

        const data = {
            email: values.email,
            password: values.password
        }

        request({
            method: 'POST',
            url: LOGIN_PATH,
            data
        }).then((resp) => {
            console.log(resp);
            resetForm()
            this.nextPath('/dashboard');
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