/**
 * Manages All API requests
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import request from "./request";
import querries from "../utils/querries";
import apiRoutes from "../config/APIs";

const {
  REGISTER_PATH,
  LOGIN_PATH,
  VERIFY_EMAIL_PATH,
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
  READ_USER_PATH,
  APPLY_PATH,
} = apiRoutes;

const JWT = "JWT";

/**
 * login user in then navigate to next page
 * @param {Object} credentials - username and  password
 * @param {Object} history - react router history object
 */
const login = async (credentials, history) => {
  return request({
    method: "post",
    url: LOGIN_PATH,
    data: credentials,
  })
    .then(resp => {
      console.log(resp);
      querries.storeItem(JWT, resp.data);
      console.log(querries.retrieveItem(JWT));

      if (querries.isAuthorized(history)) {
        history.push("dashboard");
      }
    })
    .catch(err => {
      if (err) alert("Something went wrong....Please try again");
    });
};

/**
 *submits user account registration
 * @param {Object} form - registration form
 * @param {Function} nextAction - show success component
 */
const register = async (form, nextAction) => {
  return request({
    method: "post",
    url: REGISTER_PATH,
    data: form,
  }).then(resp => {
    console.log(resp);
    if (resp.success) nextAction("verify");
    else
      alert(
        "Something went wrong....Check your Username and Password and try again."
      );
  });
};

/**
 * request to verify user email address
 * @param {Object} verificationCode  - contains user verification string
 */
const verifyEmail = verificationCode => {
  return request({
    method: "post",
    url: VERIFY_EMAIL_PATH,
    data: verificationCode,
  }).then(resp => {
    console.log(resp);
  });
};
/**
 * Submits user email validation code
 * @param {Object} data - email verification code
 */
const forgotPassword = data => {
  return request({
    method: "post",
    url: FORGOT_PASSWORD_PATH,
    data: data,
  }).then(resp => {
    console.log(resp);
  });
};

/**
 * resquests to updates user password
 * @param {Object} data - email and reset token
 */
const resetPassword = data => {
  return request({ method: "post", url: RESET_PASSWORD_PATH, data: data }).then(
    resp => {
      console.log(resp);
    }
  );
};

/**
 * submits user application
 * @param {Object} form - application form values
 * @param {Function} nextAction - success action
 * @param {Object} history - react router history object
 */
const apply = async (form, history) => {
  // let token = await querries.isAuthorized(history);
  try {
    await request({
      method: "post",
      url: "todos", //for testing
      data: form,
      // config: {
      //   header: `Bearer ${token}`
      // }
    }).then(resp => {
      console.log(resp);
      return resp;
    });
  } catch (err) {
    return err;
  }
};

/**
 *get users informations
 * @param {Object} history - react-router history object
 */
const getInfo = async history => {
  let token = await querries.isAuthorized(history);
  return request({
    method: "get",
    url: READ_USER_PATH,
    config: {
      Authorization: `Bearer ${token}`,
    },
  }).then(resp => {
    console.log(resp);
    return resp;
  });
};

export {
  login,
  register,
  verifyEmail,
  forgotPassword,
  resetPassword,
  apply,
  getInfo,
};
