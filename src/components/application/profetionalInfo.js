import React from 'react'
import { Form, Field } from 'formik'
import './style.css'

const ProfetionalInfo = ({ touched, errors, handleSubmit }) => (

    <Form>
        <h3>Profetional Information</h3>
        <div className="full-field-container">
            <Field
                className="application-input-full"
                component="select"
                name="occupation"
                style={touched.gender && errors.gender ? { border: '2px solid red' } : null} >
                <option className="placeholder-option" default value={false}>What role best describe you?</option>
                <option value="male">Developer</option>
                <option value="female">Designer</option>
                <option value="nb">Engineer</option>
            </Field>
        </div>
        <div className="half-field-container">
            <Field
                className="application-input-half input-file"
                name="file"
                type="file"
                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                placeholder="Resume"
            />

            <Field
                className="application-input-half"
                name="email"
                type="link"
                //className="field"
                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                placeholder="LinkedIn"
            />
        </div>
        <div className="half-field-container">
            <Field
                className="application-input-half"
                name="email"
                type="link"
                //className="field"
                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                placeholder="Github"
            />

            <Field
                className="application-input-half"
                name="email"
                type="link"
                //className="field"
                style={touched.email && errors.email ? { border: '2px solid red' } : null}
                placeholder="Potfolio"
            />
        </div>
    </Form>
)

export default ProfetionalInfo;