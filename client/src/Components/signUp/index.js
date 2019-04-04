import React, { Component } from 'react'
import { Formik } from 'formik'
import { SignUpValidation } from '../../Forms/ValidationSchema'
import SignUpForm from '../../Forms/SignUpForm'
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
                render={ props => (
                    <SignUpForm {...props} />
                )}
            />
        )
    }
}

export default SignUp