import React, { Component } from 'react'
import { Formik } from 'formik'
import { LogInValidation } from '../../Forms/ValidationSchema'
import LogInForm from '../../Forms/LogInForm'
import axios from 'axios'
import './styles.css'

class LogIn extends Component {

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
                render={ props => (
                    <LogInForm {...props}/>
                )}
            />
        )
    }
}

export default LogIn