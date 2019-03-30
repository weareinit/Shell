import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { LogInSchema } from '../Validator/ValidationSchema'

const LogIn = ({ touched, errors, isSubmitting, componentChange }) => {
    return (
        <>
            <Form>
                <div>
                    <Field type="email" name="email" placeholder="Email Address" />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <div style={{
                    marginTop: '20px'
                }}>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </div>
            </Form>
        </>
    )
}

export const LogInForm = withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: LogInSchema,
    handleSubmit(values, { resetForm, setSubmitting }) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
        }, 1000)
    }
})(LogIn)

export default LogInForm