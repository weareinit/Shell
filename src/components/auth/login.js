import React, { Component } from "react";

import { withRouter } from "react-router";
import { Formik, Form, Field } from "formik";

import { LogInValidation } from "../../utils/validations";
import "./style.css";

import { LOGIN_PATH } from "../../config/APIs";
import request from "../../services/request";
import querries from "../../utils/querries";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    nextPath = () => this.props.history.push("/dashboard");

    handleSubmit(values) {

        const data = {
            email: values.email,
            password: values.password
        };

        request({
            method: "POST",
            url: LOGIN_PATH,
            data
        }).then((resp) => {
            querries.storeItem(resp.data);
            this.nextPath();
        })

    };

    render() {

        return (
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={LogInValidation}
                onSubmit={this.handleSubmit}
                render={({ touched, errors, handleSubmit }) => (
                    <Form>
                        <div className="field-div">
                            <Field
                                name="email"
                                type="email"
                                className="field"
                                style={touched.email && errors.email ? { border: "2px solid red" } : null}
                                placeholder="Email"
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
                        <div className="auth-submit-button-container">
                            <button className="auth-submit-button" type="submit">Log In</button>
                        </div>
                    </Form>

                )}
            />
        );
    }
}

export default withRouter(Login);