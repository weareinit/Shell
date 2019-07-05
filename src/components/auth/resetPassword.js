/**
 * updates user's password components
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import "./styles.css";
import React from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { TextInput, Button, ErrorMessage } from "../common";
import {
  resetPasswordValidation,
  resetPasswordInitialValues
} from "../../utils/validations";
import { resetPassword } from "../../services/routes";
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordReset: false,
      showSubmitErr: false
    };
  }

  //resets password with received token
  handleResetSubmit = values => {
    let data = { verifyCode: values.userEmail };
    console.log(values);
    try {
      resetPassword(data).then(resp => {
        this.setState({ isPasswordReset: true, showResetErr: false });
      });
    } catch (err) {
      this.setState({ showResetErr: true });
    }
  };

  //navigates to forgot
  gotToForgot = () => {
    let { setAuthState, FORGOT_PASSWORD } = this.props;
    setAuthState(FORGOT_PASSWORD);
  };

  //navigates to login
  gotToLogin = () => {
    let { setAuthState, LOGIN } = this.props;
    setAuthState(LOGIN);
  };

  render() {
    return (
      <Formik
        validationSchema={resetPasswordValidation}
        initialValues={resetPasswordInitialValues}
        onSubmit={this.handleResetSubmit}
        render={({ touched, errors }) => (
          <Form className="forgot-form">
            <div className="welcome-message">
              <h3>Forgot Password</h3>
              <p>Please fill out the form bellow to reset your Password</p>
            </div>
            <ErrorMessage
              errors={[
                //one error at a time
                (touched.resetCode && errors.resetCode) ||
                  (touched.email && errors.email) ||
                  (touched.password && errors.password) ||
                  (touched.confirmpassword && errors.confirmpassword)
              ]}
              shouldShow={
                !!(touched.resetCode && errors.resetCode) ||
                !!(touched.email && errors.email) ||
                !!(touched.password && errors.password) ||
                !!(touched.confirmpassword && errors.confirmpassword)
              }
            />
            <div className="field-div">
              <TextInput
                name="resetCode"
                type="text"
                placeholder="Reset Code"
                error={touched.resetCode && errors.resetCode}
              />
            </div>
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
                placeholder="New Password"
                error={touched.password && errors.password}
              />
            </div>
            <div className="field-div">
              <TextInput
                name="confirmpassword"
                type="password"
                placeholder="Confirm New Password"
                error={touched.confirmpassword && errors.confirmpassword}
              />
            </div>
            <div className="auth-question-buttons">
              <p onClick={this.gotToForgot}>Get a New Reset Code</p>
              <p onClick={this.gotToLogin}>Go Back to Login</p>
            </div>
            <div className="auth-submit-button-container">
              <Button
                title="Reset"
                type="submit"
                id="register-success"
                extraStyles="auth-button-extra-styles"
              />
            </div>
          </Form>
        )}
      />
    );
  }
}
ResetPassword.propTypes = {
  setAuthState: PropTypes.func.isRequired,
  LOGIN: PropTypes.string.isRequired,
  FORGOT_PASSWORD: PropTypes.string.isRequired
};
export default ResetPassword;
