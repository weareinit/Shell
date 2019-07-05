/**
 * Login user and save user token
 * ------------------------------
 * @author Jehf K D., Luis H. (@jehfkemsy , @boxslide15)
 */

import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { TextInput, Button, ErrorMessage } from "../common";
import { LogInValidation, LoginInitialValues } from "../../utils/validations";
import { login } from "../../services/routes";
import "./styles.css";

const Login = props => {
  let { setAuthState, FORGOT_PASSWORD, VERIFY } = props;

  let handleSubmit = values => {
    const data = {
      email: values.email,
      password: values.password
    };
    login(data, props.history);
  };

  let goToforgotPassword = () => {
    setAuthState(FORGOT_PASSWORD);
  };

  let goToVerify = () => {
    setAuthState(VERIFY);
  };

  return (
    <Formik
      initialValues={LoginInitialValues}
      validationSchema={LogInValidation}
      onSubmit={handleSubmit}
      render={({ touched, errors }) => (
        <Form className="auth-form">
          <ErrorMessage
            errors={[
              //one error at a time
              (touched.email && errors.email) ||
                (touched.password && errors.password)
            ]}
            shouldShow={
              !!(touched.email && errors.email) ||
              !!(touched.password && errors.password)
            }
          />
          <div className="field-div">
            <TextInput
              name="email"
              type="email"
              placeholder="Email Address"
              error={touched.email && errors.email}
            />
          </div>
          <div className="field-div">
            <TextInput
              name="password"
              type="password"
              placeholder="Password"
              error={touched.password && errors.password}
            />
          </div>
          <div className="auth-question-buttons">
            <p onClick={goToforgotPassword}>Forgot Password?</p>
            <p onClick={goToVerify}>Need to Verify Email?</p>
          </div>
          <div className="auth-submit-button-container">
            <Button
              type="submit"
              title="Login"
              id="login"
              extraStyles="auth-button-extra-styles"
            />
          </div>
        </Form>
      )}
    />
  );
};
Login.propTypes = {
  setAuthState: PropTypes.func.isRequired,
  FORGOT_PASSWORD: PropTypes.string.isRequired,
  VERIFY: PropTypes.string.isRequired
};
export default withRouter(Login);
