import React from 'react'
import { Form, Field } from 'formik'
import './style.css'

const SchoolInfo = ({ touched, errors, handleSubmit }) => (

    <Form>
        <h3>School Information</h3>
        <div className="half-field-container">
            <Field
                className="application-input-half"
                component="select"
                name="School name"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option className="placeholder-option" default value={false}>School Name</option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>

            <Field
                className="application-input-half"
                component="select"
                name="Major"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option className="placeholder-option" default value={false}>Major</option>
                <option value="CS">Computer Sciences</option>
                <option value="IT">Information Technology</option>
                <option value="CE">Computer Engineering</option>
                <option value="other">Other</option>
            </Field>
        </div>
        <div className="half-field-container">
            <Field
                className="application-input-half"
                component="select"
                name="Level of study"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option className="placeholder-option" default value={false}>Level of Study</option>
                <option value="male">Undergraduate</option>
                <option value="female">Gradute</option>
            </Field>

            <Field
                className="application-input-half"
                component="select"
                name="Graduation year"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option className="placeholder-option" default value={false}>Graduation Year</option>
                <option value="male">2019</option>
                <option value="female">2020</option>
                <option value="nb">2021</option>
                <option value="nb">2022</option>
                <option value="nb">2023</option>
            </Field>
        </div>
    </Form>
)

export default SchoolInfo;