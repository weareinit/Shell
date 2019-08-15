// Enum auth states
const States = Object.freeze({
  LOGIN: "/login",
  SIGNUP: "/register",
  VERIFY_EMAIL: "/email-verification",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  RESEND_VERIFY_CODE: "/resend-email-code",
  BAD_REQUEST: "bad",
  FAILED_REQUEST: "failed"
});

export default States;
