import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { SignUpSchema } from '../Validator/ValidationSchema'

const SignUp = ({ touched, errors, isSubmitting, componentChange }) => {
    return (
        <>
            <Form>
                <div>
                    <Field type="text" name="firstName" placeholder="Enter first name" />
                    {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div>
                    <Field type="text" name="lastName" placeholder="Enter last name" />
                    {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Enter your school email"
                    />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Enter password" />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <p>{errors.confirmPassword}</p>
                    )}
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

export const SignUpForm = withFormik({
    mapPropsToValues() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    validationSchema: SignUpSchema,
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.password !== values.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" })
        }
        else {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 1000)
        }
    }
})(SignUp);

export default SignUpForm