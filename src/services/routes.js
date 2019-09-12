/**
 * Manages All API requests
 */

import request from "./request";
import querries from "../utils/querries";
import mixed from "../utils/mixed";
import apiRoutes from "../config/APIs";
import States from "../pages/auth/states";

const { VERIFY_EMAIL, LOGIN, RESET_PASSWORD, FAILED_REQUEST } = States;

const {
  REGISTER_PATH,
  LOGIN_PATH,
  VERIFY_EMAIL_PATH,
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
  READ_USER_PATH,
  APPLY_PATH,
  RESEND_CODE_PATH,
  MENTOR_PATH,
  CONFIRM_PATH,
  CANT_GO_PATH
} = apiRoutes;

const TOKEN = "JWT";
const ID = "shellID";

/**
 * submits user account registration form
 * @param {Object} data - registration form
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const register = async (data, successAction, faillureAction) =>
  request({
    method: "post",
    url: REGISTER_PATH,
    data
  })
    .then(resp => {
      if (resp.success) successAction(VERIFY_EMAIL);
    })
    .catch(err => {
      //need to add better error handling on these
      faillureAction(FAILED_REQUEST);
    });

/**
 * Resquest send verification code to user email address
 * @param {Object} data - contains user email address string
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const verifyEmail = (data, successAction, faillureAction) =>
  request({
    method: "put",
    url: VERIFY_EMAIL_PATH,
    data
  })
    .then(resp => {
      if (resp.success) successAction(LOGIN);
    })
    .catch(err => {
      faillureAction(FAILED_REQUEST);
    });

/**
 * Resquest to send user a new email verification code
 * @param {Object} data - wraps user email
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const resendCode = (data, successAction, faillureAction) =>
  request({
    method: "put",
    url: RESEND_CODE_PATH,
    data
  })
    .then(resp => {
      if (resp.success) successAction(VERIFY_EMAIL);
    })
    .catch(err => {
      faillureAction(FAILED_REQUEST);
    });

/**
 * login user then navigate to dashboard
 * @param {Object} credentials - username and  password
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const login = (credentials, history, faillureAction) =>
  request({
    method: "post",
    url: LOGIN_PATH,
    data: credentials
  })
    .then(resp => {
      const { shellID, JWT } = resp.data;
      querries.storeItem(TOKEN, JWT);
      querries.storeItem(ID, shellID);
    })
    .then(() => {
      if (querries.isAuthorized()) {
        history.push("/");
      }
    })
    .catch(err => {
      faillureAction(FAILED_REQUEST);
    });

/**
 * Submits user email validation code
 * @param {Object} data - contains user email address
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const forgotPassword = (data, successAction, faillureAction) =>
  request({
    method: "put",
    url: FORGOT_PASSWORD_PATH,
    data
  })
    .then(resp => {
      if (resp.success) successAction(RESET_PASSWORD);
    })
    .catch(err => {
      faillureAction(FAILED_REQUEST);
    });

/**
 * Resquests to updates user password
 * @param {Object} data - email and reset token
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const resetPassword = (data, successAction, faillureAction) =>
  request({
    method: "put",
    url: RESET_PASSWORD_PATH,
    data
  })
    .then(resp => {
      if (resp.success) successAction(LOGIN);
    })
    .catch(err => {
      faillureAction(FAILED_REQUEST);
    });

/**
 * Submits user application
 * @param {Object} form - application form values
 * @param {Object} history - react router history object
 * @param {Function} nextAction - success action
 * @param {Object} faillureAction - executes on faillure
 */
const apply = (form, history, nextAction, faillureAction) => {
  const token = querries.isAuthorized();

  form.haveBeenToShell = mixed.arrToString(form.haveBeenToShell);
  form.dietaryRestriction = mixed.arrToString(form.dietaryRestriction);

  const setDefaults = () =>
    Object.keys(form).forEach(key => {
      if (!form[key]) form[key] = "N/A";
    });

  setDefaults();
  let data = new FormData();
  Object.keys(form).map(key => data.append(key, form[key]));

  return request({
    method: "put",
    url: APPLY_PATH,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token
    }
  })
    .then(resp => {
      nextAction(true);
      return resp;
    })
    .catch(err => {
      console.log(err);
      faillureAction();
    });
};

/**
 * Get users informations
 * @param {Object} history - react-router history object
 */
const getUserInfo = async history => {
  const token = await querries.isAuthorized();
  const shellID = await querries.retrieveItem(ID);

  return request({
    method: "post",
    url: READ_USER_PATH,
    data: { shellID },
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(resp => {
      if (resp.data === null) {
        querries.deAuthorize();
        history.push(LOGIN);
      }
      querries.storeItem("userData", JSON.stringify(resp.data));
    })
    .catch(err => {
      querries.deAuthorize();
      history.push(LOGIN);
    });
};

/**
 * Submits user application
 * @param {Object} form - mentor application form values
 * @param {Function} successAction - success action
 * @param {Object} faillureAction - executes on faillure
 */
const mentor = (form, successAction, faillureAction) => {
  const { skills, availability } = form;
  form.skills = mixed.arrToString(skills);
  form.availability = mixed.arrToString(availability);
  if (!form.organization) form.organization = "N/A";
  let data = new FormData();
  Object.keys(form).map(key => data.append(key, form[key]));

  return request({
    method: "post",
    url: MENTOR_PATH,
    data
  })
    .then(resp => {
      successAction();
    })
    .catch(err => {
      if (err.data) {
        const strErr = JSON.stringify(err.data);
        faillureAction(strErr);
      } else {
        const strErr = JSON.stringify(err.data.err);
        faillureAction(strErr);
      }
    });
};

/**
 * Confirms user is attending
 * @param {Object} data - contains user email address
 * @param {Function} successAction - executes after a sucessful request
 * @param {Function} faillureAction - executes on request failure
 */
const confirm = async (email, successAction, faillureAction) => {
  const token = await querries.isAuthorized();

  return request({
    method: "put",
    url: CONFIRM_PATH,
    data: { email },
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(resp => {
      console.log(resp);
      if (resp.success) successAction();
    })
    .catch(err => {
      faillureAction(err.data);
    });
};

const cantGo = async (email, successAction, faillureAction) => {
  const token = await querries.isAuthorized();

  return request({
    method: "put",
    url: CANT_GO_PATH,
    data: { email },
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(resp => {
      console.log(resp);
      if (resp.success) successAction();
    })
    .catch(err => {
      faillureAction(err.data);
    });
};

export default {
  login,
  register,
  verifyEmail,
  resendCode,
  forgotPassword,
  resetPassword,
  apply,
  getUserInfo,
  mentor,
  confirm,
  cantGo
};
