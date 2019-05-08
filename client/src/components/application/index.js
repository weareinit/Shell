import React, { Component } from 'react'
import { Formik } from 'formik'
import { PersonalInfoValidation } from '../../utils/ValidationSchema'
import PersonalInfo from './personalInfo'
import axios from 'axios'
import './style.css'
class Application extends Component {

    handleSubmit(values, { resetForm }) {
        const apply = async () => {
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    dob: values.dob,
                    gender: values.gender,
                    race: values.race,
                    phoneNumber: values.phoneNumber
                })
                console.log(response.data)
                resetForm()
            } catch (error) {
                console.log(error)
            }
        }
        apply()
    }

    render() {
        return (
            <div id="application-container">
                <h1 className="page-title">Application</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        dob: '',
                        gender: '',
                        race: '',
                        phoneNumber: ''
                    }}
                    validationSchema={PersonalInfoValidation}
                    onSubmit={this.handleSubmit}
                    render={props => (
                        <PersonalInfo {...props} />
                    )}
                />
            </div>
        )
    }
}

export default Application;