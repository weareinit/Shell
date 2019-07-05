/**
 * A reusable text input component
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */
import React from "react";
import { Field } from "formik";

const TextInput = props => {
  let { error, name, type, label, placeholder } = props;

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}{" "}
      <Field
        className="text-input"
        name={name}
        type={type || "text"}
        style={error ? { border: "2px solid red" } : null}
        placeholder={placeholder}
      />
    </>
  );
};

export { TextInput };
