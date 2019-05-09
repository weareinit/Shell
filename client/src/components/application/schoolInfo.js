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
                <option value=""></option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>

            <Field
                className="application-input-half"
                component="select"
                name="Major"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option value=""></option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>
        </div>
        <div className="half-field-container">
            <Field
                className="application-input-half"
                component="select"
                name="Level of study"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option value=""></option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>

            <Field
                className="application-input-half"
                component="select"
                name="Graduation year"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option value=""></option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>
        </div>
    </Form>
)

export default SchoolInfo;