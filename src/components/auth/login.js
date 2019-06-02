import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'
import { LogInValidation } from '../../utils/ValidationSchema'
import './style.css'

import { LOGIN_PATH } from '../../config/api_paths'
import request from '../../services/request'

const axios = require('axios');

async function makeGetRequest() {
  
  let res = await axios.post("https://immense-reef-66486.herokuapp.com/application/login",{email:"dev@fiu.edu",password:"devboidev"});

  let data = res.data;
  console.log(data);
}

makeGetRequest();

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    handleSubmit(values) {

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
                            <button className="auth-submit-button" type="submit" onClick={this.handleSubmit}>Log In</button>
                        </div>
                    </Form>

                )}
            />
        )
    }
}

export default withRouter(LogIn);