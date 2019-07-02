/**
 * API routes
 */
import request from "./request";
import querries from "../utils/querries";
import {
  LOGIN_PATH,
  REGISTER_PATH,
  APPLICATION_PATH,
  USER_PATH
} from "../config/APIs";

let JWT = querries.retrieveItem("JWT");

/**
 * login user in and then save user's token
 * @param {Object} credentials -username and  password
 */
const login = async credentials => {
  request({
    method: "get",
    url: LOGIN_PATH,
    data: { credentials }
  })
    .then(resp => {
      console.log(resp);
      querries.storeItem("JWT", resp.data);
    })
    .catch(alert("Something went wrong....Please try again"));
};

/**
 *submit user account registration
 * @param {Object} form - registration form
 */
const register = async form => {
  await querries.isAuthorized();
  request({
    method: "post",
    url: REGISTER_PATH,
    data: { form }
  }).then(resp => {
    console.log(resp);
  });
};

/**
 * submits user application
 * @param {Object} form -application form
 */
const apply = async form => {
  await querries.isAuthorized();
  request({
    method: "post",
    url: APPLICATION_PATH,
    data: { form },
    config: {
      Authorization: `Bearer ${JWT}`
    }
  }).then(resp => {
    console.log(resp);
  });
};

/**
 *get users informations
 * @param {String} token - user's token
 */
const getInfo = async token => {
  await querries.isAuthorized();
  request({
    method: "get",
    url: USER_PATH,
    config: {
      Authorization: `Bearer ${JWT}`
    }
  }).then(resp => {
    console.log(resp);
  });
};

export default { login, register, apply, getInfo };
