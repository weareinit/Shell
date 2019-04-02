import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { SignUpValidation } from '../../Validator/ValidationSchema'
import axios from 'axios'
import "./styles.css"
const SignUp = ({ touched, errors, isSubmitting, componentChange }) => {
    return (
        <Form>
            
            <div className = "fieldDiv">
                <Field id = "field" type="text" name="firstName" placeholder="Enter first name" />
                
            </div>
            <div className = "fieldDiv">
                <Field id = "field" type="text" name="lastName" placeholder="Enter last name" />
               
            </div>
            <div className = "fieldDiv">
                <Field id = "field"
                    type="email"
                    name="email"
                    placeholder="Enter your school email"
                />
                {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div className = "fieldDiv">
                <Field id = "field" type="password" name="password" placeholder="Enter password" />
                
            </div>
            <div className = "fieldDiv" id = "bottomFieldS">
                <Field 
                    id = "field" 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                />
                
            </div>
            <div id = "submitStyle">
                <button id = "submitBtn" type="submit" disabled={isSubmitting}>Submit</button>
            </div>
            
        </Form>
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
    validationSchema: SignUpValidation,
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.password !== values.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" });
            setTimeout(() => {
                setSubmitting(false);
            }, 1000)
        }
        else {
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
              })
              .then(response => {
                resetForm()
                console.log(response.data)
              })
              .catch(error => {
                console.log(error);
                setSubmitting(true);
                let promise = new Promise(resolve => {
                    setTimeout(() => resolve(true), 1000);
                })
                promise.then(value => {
                    setSubmitting(value)
                    console.log(values)
                    resetForm()
                })
            })/*
            console.log(values)
            setTimeout(() => {
                setSubmitting(false);
            }, 1000)
            resetForm()*/
        }
    }
})(SignUp);

export default SignUpForm;
