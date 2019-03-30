import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { LogInValidation } from '../../Validator/ValidationSchema'
import axios from 'axios'
import "./styles.css"

const LogIn = ({ touched, errors, isSubmitting, componentChange }) => {
    return (
        <Form>
           
            <div>
                <Field className = "field" type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && <div className = "notWanted">{errors.email}</div>}
            </div>
            <div>
                <Field className = "field" type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
           
        </Form>
    )
}

export const LogInForm = withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: LogInValidation,
    handleSubmit(values, { resetForm, setSubmitting }) {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
                email: values.email,
                password: values.password
              })
              .then(response => {
                resetForm()
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
                setSubmitting(true)
                let promise = new Promise(resolve => {
                    setTimeout(() => resolve(true), 1000);
                })
                promise.then(value => {
                    setSubmitting(value)
                    resetForm()
                })
            })
    }
})(LogIn)

export default LogInForm;