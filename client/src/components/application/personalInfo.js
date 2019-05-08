import React from 'react'
import { Form, Field } from 'formik'
import './style.css'
const min = () => {
    let date = new Date()
}

const max = () => {
    let date = new Date()

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (month.toString().length < 2) {
        month = "0" + month
    }
    if (day.toString().length < 2) {
        day = "0" + day
    }

    let maxDate = year + "-" + month + "-" + day

    return maxDate
}

const PersonalInfo = ({ touched, errors, handleSubmit }) => (

    <Form>
        <h3>Personal Information</h3>
        <div className="half-field-container">

            <Field
                className="application-input-half"
                name="firstName"
                type="text"
                //className="field"
                style={touched.firstName && errors.firstName ? { border: '2px solid red' } : null}
                placeholder="First name"
            />

            <Field
                className="application-input-half"
                name="lastName"
                type="text"
                //className="field"
                style={touched.lastName && errors.lastName ? { border: '2px solid red' } : null}
                placeholder="Last name"
            />

        </div>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                name="email"
                type="email"
                //className="field"
                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                placeholder="Email"
            />
        </div>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                name="dob"
                type="date"
                min="1900-01-01"
                max={max()}
                //className="field"
                style={touched.dob && errors.dob ? { border: '2px solid red' } : null}
            //placeholder="Email"
            />
        </div>
        <div className="half-field-container">

            <Field
                className="application-input-half"
                component="select"
                name="gender"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nb">Other/Non-Binary</option>
            </Field>

            <Field
                className="application-input-half"
                component="select"
                name="race"
                style={touched.race && errors.race ? { border: '2px solid red' } : null} >
                <option value=""></option>
                <option value="white">White</option>
                <option value="black">Black or African American</option>
                <option value="hispanic">Hispanic or Latinx</option>
                <option value="native">Native American</option>
                <option value="asian">Asian</option>
                <option value="other">Other</option>
            </Field>

        </div>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                name="phoneNumber"
                type="text"
                //className="field"
                style={touched.phoneNumber && errors.phoneNumber ? { border: '2px solid red' } : null}
                placeholder="Phone Number"
            />
        </div>
        {/* <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div> */}
    </Form>
)

export default PersonalInfo