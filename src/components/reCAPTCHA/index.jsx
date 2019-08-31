import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHALib from "react-google-recaptcha";
import apiRoutes from "../../config/APIs";

const { RECAPTCHA_PUBLIC_KEY } = apiRoutes;

const ReCAPTCHA = ({ shouldShow, onChange, PUBLIC_KEY }) =>
  (shouldShow && <ReCAPTCHALib sitekey={PUBLIC_KEY} onChange={onChange} />) || (
    <></>
  );

ReCAPTCHA.defaultProps = {
  shouldShow: false,
  PUBLIC_KEY: RECAPTCHA_PUBLIC_KEY // can have different keys for different forms
};

ReCAPTCHA.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  PUBLIC_KEY: PropTypes.string
};
export { ReCAPTCHA };
