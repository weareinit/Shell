import React from 'react'
import { Form, Field } from 'formik'
import './style.css'

const SchoolInfo = ({ touched, errors, handleSubmit }) => (

    <Form>
        <h3>Additional Information</h3>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                component="select"
                placeholder="Will you be needing travel reinbursment?"
                name="Will you be needing travel reinbursment?"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option value="male">No</option>
                <option value="female">Yes</option>
            </Field>
        </div>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                name=""
                value="where are you coming from?"
                type="text"
                //className="field"
                style={touched.firstName && errors.firstName ? { border: '2px solid red' } : null}
                placeholder="where are you coming from?"
            />
        </div>
    </Form>
)

export default SchoolInfo;