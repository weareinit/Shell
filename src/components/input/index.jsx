/**
 * A reusable input component
 */
import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { InlineError } from "../errorMessage";
import "./styles.css";
const Input = props => {
  let {
    error,
    errorVal,
    name,
    type,
    label,
    placeholder,
    extraStylesClass
  } = props;

  return (
    <>
      <InlineError
        shouldShow={error}
        error={errorVal}
        label={label}
        name={name}
      />
      <Field
        className={`text-input ${extraStylesClass || ""}`}
        name={name}
        type={type || "text"}
        style={error ? { border: "2px solid red" } : null}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = {
  error: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  errorVal: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  extraStylesClass: PropTypes.string
};

export { Input };
