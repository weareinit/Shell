/**
 * Manages All API requests
 */

import request from './request';
import querries from '../utils/querries';
import apiRoutes from '../config/APIs';
import authState from "../pages/auth/authStates"

const {
    VERIFY_EMAIL,
    LOGIN,
    RESET_PASSWORD,
    BAD_REQUEST,
    FAILED_REQUEST
} = authState

const {
    REGISTER_PATH,
    LOGIN_PATH,
    VERIFY_EMAIL_PATH,
    FORGOT_PASSWORD_PATH,
    RESET_PASSWORD_PATH,
    READ_USER_PATH,
    APPLY_PATH,
    RESEND_CODE_PATH
} = apiRoutes;

const JWT = 'JWT';

/**
 * submits user account registration form
 * @param {Object} data - registration form
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const register = async(data, successAction, faillureAction) =>
    request({
        method: 'post',
        url: REGISTER_PATH,
        data
    }).then(resp => {
        if (resp.success) successAction(VERIFY_EMAIL);

    }).catch((err) => {

        if (!err.data) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });

/**
 * Resquest send verification code to user email address
 * @param {Object} data - contains user email address string
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const verifyEmail = (data, successAction, faillureAction) =>
    request({
        method: 'put',
        url: VERIFY_EMAIL_PATH,
        data,
    }).then(resp => {
        if (resp.success) successAction(LOGIN);

    }).catch((err) => {

        if (!err.data.success) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });


/**
 * Resquest to send user a new email verification code
 * @param {Object} data - wraps user email 
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const resendCode = (data, successAction, faillureAction) =>
    request({
        method: 'get',
        url: RESEND_CODE_PATH,
        data
    }).then(resp => {
        if (resp.success) successAction(LOGIN, "hello there");
    }).catch((err) => {

        if (!err.data.success) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });


/**
 * login user then navigate to dashboard
 * @param {Object} credentials - username and  password
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const login = async(credentials, history, faillureAction) =>
    request({
        method: 'post',
        url: LOGIN_PATH,
        data: credentials,
    })
    .then(resp => {
        querries.storeItem(JWT, resp.data);
    }).then(() => {
        if (querries.isAuthorized(history)) {
            history.push('/');
        }
    })
    .catch((err) => {

        if (!err.data.success) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });


/**
 * Submits user email validation code
 * @param {Object} data - contains user email address
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const forgotPassword = (data, successAction, faillureAction) =>
    request({
        method: 'put',
        url: FORGOT_PASSWORD_PATH,
        data,
    }).then(resp => {
        if (resp.success) successAction(RESET_PASSWORD);
    }).catch((err) => {

        if (!err.data.success) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });

/**
 * Resquests to updates user password
 * @param {Object} data - email and reset token
 * @param {Function} successAction - executed after a sucessful request
 * @param {Function} faillureAction - executed on request failure
 */
const resetPassword = (data, successAction, faillureAction) =>
    request({
        method: 'put',
        url: RESET_PASSWORD_PATH,
        data
    }).then(resp => {
        if (resp.success) successAction(LOGIN);
    }).catch((err) => {

        if (!err.data.success) faillureAction(BAD_REQUEST)
        else faillureAction(FAILED_REQUEST)

    });


/**
 * submits user application
 * @param {Object} form - application form values
 * @param {Function} nextAction - success action
 * @param {Object} history - react router history object
 */
const apply = async(form, history, nextAction) => {
    let token = await querries.isAuthorized(history);
    try {
        await request({
            method: 'post',
            url: APPLY_PATH,
            data: form,
            config: {
                header: `Bearer ${token}`
            }
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
const getUserInfo = async history => {
    const token = await querries.isAuthorized(history);
    return request({
        method: 'get',
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
    resendCode,
    forgotPassword,
    resetPassword,
    apply,
    getUserInfo,
};