import React, { Component } from "react";

import { Formik, Form, Field } from "formik";

import { SignUpValidation } from "../../utils/validations";
import { REGISTER_PATH } from "../../config/api_paths";
import request from "../../services/request";

import "./style.css";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.showSuccess)

    };

    handleSubmit = (values) => {

        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }

        request({
            method: "POST",
            url: REGISTER_PATH,
            data
        }).then((resp) => {
            console.log(resp)
            this.props.showSuccess(resp.success);
        });

    };

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                validationSchema={SignUpValidation}
                onSubmit={this.handleSubmit}
                render={({ touched, errors, handleSubmit }) => (
                    <Form className="auth-form">
                        <div className="field-div">
                            <Field
                                name="firstName"
                                type="text"
                                className="field"
                                style={touched.firstName && errors.firstName ? { border: "2px solid red" } : null}
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="field-div">
                            <Field
                                name="lastName"
                                type="text"
                                className="field"
                                style={touched.lastName && errors.lastName ? { border: "2px solid red" } : null}
                                placeholder="Enter last name"
                            />
                        </div>
                        <div className="field-div">
                            <Field
                                name="email"
                                type="email"
                                className="field"
                                style={touched.email && errors.email ? { border: "2px solid red" } : null}
                                placeholder="Enter your school email"
                            />
                        </div>
                        <div className="field-div">
                            <Field
                                name="password"
                                type="password"
                                className="field"
                                style={touched.password && errors.password ? { border: "2px solid red" } : null}
                                placeholder="Password"
                            />
                        </div>
                        <div className="field-div">
                            <Field
                                name="confirmPassword"
                                type="password"
                                className="field"
                                style={touched.confirmPassword && errors.confirmPassword ? { border: "2px solid red" } : null}
                                placeholder="Confirm password"
                            />
                        </div>
                        <div className="auth-submit-button-container">
                            <button className="auth-submit-button" type="submit" >Submit</button>
                        </div>
                    </Form>
                )}
            />
        );
    }
}

export default SignUp;