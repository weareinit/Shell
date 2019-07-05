/**
 * Component - renders after a successful registration
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import "./styles.css";
import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { TextInput, Button, ErrorMessage } from "../common";
import {
  registrationCodeValidation,
  registrationCodeInitialValues
} from "../../utils/validations";
import { verifyEmail } from "../../services/routes";

const Verify = props => {
  let { setAuthState, LOGIN } = props;
  let goToLogin = () => {
    setAuthState(LOGIN);
  };

  const handleSubmit = values => {
    let data = { verifyCode: values.verificationCode };
    verifyEmail(data);
  };

  return (
    <Formik
      validationSchema={registrationCodeValidation}
      initialValues={registrationCodeInitialValues}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className="success-form">
          <div className="welcome-message">
            <h3>Verify Email</h3>
            <p>vase fill out the form bellow to reset your Password</p>
          </div>
          <ErrorMessage
            errors={[errors.email || errors.verifycationCode]}
            shouldShow={
              !!(errors.email && touched.email) ||
              !!(errors.verifycationCode && touched.verifycationCode)
            }
          />
          <div className="field-div">
            <TextInput
              name="email"
              type="eamil"
              placeholder="Email Address"
              error={touched.email && errors.email}
            />
          </div>
          <div className="field-div">
            <TextInput
              name="verifycationCode"
              type="text"
              placeholder="Verification Code"
              error={touched.verifycationCode && errors.verifycationCode}
            />
          </div>
          <div className="auth-question-buttons">
            <p onClick={goToLogin}>Go Back to Login</p>
            {/* <p onClick={goToLogin}>Get a New Code</p> */}
          </div>
          <div className="auth-submit-button-container">
            <Button
              title="Submit"
              type="submits"
              id="register-success"
              extraStyles="auth-button-extra-styles"
            />
          </div>
        </Form>
      )}
    />
  );
};
Verify.propType = {
  LOGIN: PropTypes.string.isRequired,
  FORGOT_PASSWORD: PropTypes.string,
  SIGNUP: PropTypes.string,
  VERIFY: PropTypes.string
};
export default Verify;
