// Enum auth states
const States = Object.freeze({
  LOGIN: "/auth",
  SIGNUP: "/auth/register",
  VERIFY_EMAIL: "/auth/email-verification",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  RESEND_VERIFY_CODE: "/auth/resend-email-code",
  BAD_REQUEST: "bad",
  FAILED_REQUEST: "failed"
});

export default States;
