/**
 * updates user's password components
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { TextInput, Button, BlockError } from "../../components";
import {
  forgotPasswordValidation,
  forgotPasswordInitialValues
} from "../../utils/validations";
import { forgotPassword } from "../../services/routes";
import "./styles.css";
class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCodeSent: false,
      showSubmitErr: false
    };
  }

  //request a token to reset password
  handleForgotSubmit = values => {
    let data = { verifyCode: values.userEmail };
    console.log(data);
    forgotPassword(data);
    try {
      forgotPassword(data).then(resp => {
        this.setState({ haveResetCode: true, showForgotErr: false });
      });
    } catch (err) {
      this.setState({ showForgotErr: true });
      console.log(this.state);
    }
  };

  //navigates to Reset password
  gotToReset = () => {
    let { setAuthState, RESET_PASSWORD } = this.props;
    setAuthState(RESET_PASSWORD);
  };

  //navigates to login
  gotToLogin = () => {
    let { setAuthState, LOGIN } = this.props;
    setAuthState(LOGIN);
  };

  render() {
    return (
      <Formik
        validationSchema={forgotPasswordValidation}
        initialValues={forgotPasswordInitialValues}
        onSubmit={this.handleForgotSubmit}
        render={({ touched, errors }) => (
          <Form className="forgot-form">
            <div className="welcome-message">
              <h3>Forgot Password</h3>
              <p>Lets try to reset your password</p>
            </div>
            <BlockError
              errors={[errors.userEmail]}
              shouldShow={!!(errors.userEmail && touched.userEmail)}
            />
            <div className="field-div">
              <TextInput
                name="userEmail"
                type="email"
                placeholder="Email Address"
                error={touched.userEmail && errors.userEmail}
              />
            </div>
            <div className="auth-question-buttons">
              <p onClick={this.gotToReset}>Have a Reset Code</p>
              <p onClick={this.gotToLogin}>Go Back to Login</p>
            </div>
            <div className="auth-submit-button-container">
              <Button
                title="Send Code"
                type="submit"
                id="forgot-password"
                extraStyles="auth-button-extra-styles"
              />
            </div>
          </Form>
        )}
      />
    );
  }
}
ForgotPassword.propTypes = {
  setAuthState: PropTypes.func.isRequired,
  LOGIN: PropTypes.string.isRequired,
  RESET_PASSWORD: PropTypes.string.isRequired
};
export default ForgotPassword;
