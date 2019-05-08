import React, { Component } from 'react'
import { Formik } from 'formik'
import { PersonalInfoValidation } from '../../utils/ValidationSchema'
import PersonalInfo from './personalInfo.js'
import ProfetionalInfo from './profetionalInfo.js'
import SchoolInfo from './schoolInfo.js'
import AditionalInfo from './additionalInfo.js'
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
            <div id="application">
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
                        <div id="application-container">
                            <PersonalInfo {...props} />
                            <SchoolInfo {...props} />
                            <ProfetionalInfo {...props} />
                            <AditionalInfo {...props} />
                            <button className="submit-button" type="submit" >Submit</button>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default Application;