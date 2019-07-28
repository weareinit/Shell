// Enum auth states
const authState = Object.freeze({
    LOGIN: 'login',
    SIGNUP: 'signup',
    VERIFY_EMAIL: 'verify',
    FORGOT_PASSWORD: 'forgot',
    RESET_PASSWORD: 'reset',
    RESEND_VERIFY_CODE: 'resend',
    BAD_REQUEST: 'bad',
    FAILED_REQUEST: 'failed'
})

export default authState;