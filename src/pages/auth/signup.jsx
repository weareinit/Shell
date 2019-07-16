/**
 * register user then set show Success component
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import { Formik, Form } from "formik";
import { Button, TextInput, BlockError } from "../../components";
import { SignUpValidation, SignUpInitialValues } from "../../utils/validations";
import { register } from "../../services/routes";
import "./styles.css";

const SignUp = props => {
  const handleSubmit = values => {
    const form = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    register(form, props.setAuthState);
  };

  return (
    <Formik
      initialValues={SignUpInitialValues}
      validationSchema={SignUpValidation}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className="auth-form">
          <BlockError
            errors={[
              //one error at a time
              (touched.firstName && errors.firstName) ||
                (touched.lastName && errors.lastName) ||
                (touched.email && errors.email) ||
                (touched.password && errors.password) ||
                (touched.confirmPassword && errors.confirmPassword),
            ]}
            shouldShow={
              !!(touched.firstName && errors.firstName) ||
              !!(touched.lastName && errors.lastName) ||
              !!(touched.email && errors.email) ||
              !!(touched.password && errors.password) ||
              !!(touched.confirmPassword && errors.confirmPassword)
            }
          />
          <div className="field-div">
            <TextInput
              name="firstName"
              type="text"
              error={touched.firstName && errors.firstName}
              placeholder="First Name"
            />
          </div>
          <div className="field-div">
            <TextInput
              name="lastName"
              type="text"
              error={touched.lastName && errors.lastName}
              placeholder="Last Name"
            />
          </div>
          <div className="field-div">
            <TextInput
              name="email"
              type="email"
              error={touched.email && errors.email}
              placeholder="Email Address"
            />
          </div>
          <div className="field-div">
            <TextInput
              name="password"
              type="password"
              error={touched.password && errors.password}
              placeholder="Password"
            />
          </div>
          <div className="field-div">
            <TextInput
              name="confirmPassword"
              type="password"
              error={touched.confirmPassword && errors.confirmPassword}
              placeholder="Confirm password"
            />
          </div>
          <div className="auth-submit-button-container">
            <Button
              title="Register"
              type="submit"
              id="signup"
              extraStyles="auth-button-extra-styles"
            />
          </div>
        </Form>
      )}
    />
  );
};

export default SignUp;
