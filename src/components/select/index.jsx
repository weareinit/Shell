/**using react-select
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
import { InlineError } from "../errorMessage";
import "./styles.css";

class Select extends React.Component {
  handleChange = async value => {
    // call setFieldValue and manually update values.this.props.name
    await this.props.onChange(this.props.name, value.value);
  };

  handleBlur = async () => {
    //call setFieldTouched and manually update touched.this.props.name
    await this.props.onBlur(this.props.name, true);
  };

  render() {
    let {
      options,
      className,
      value,
      placeholder,
      label,
      error,
      touched,
      name
    } = this.props;
    let notIsValid = touched && error;

    const selectStyles = {
      control: (base, state) => ({
        ...base,
        padding: "3px",
        borderWidth: "1px",
        borderStyle: " solid ",
        borderRadius: "8px",
        borderColor: state.isFocused
          ? "#22c3d5"
          : notIsValid
          ? "red"
          : "var(--shell-sand)",
        // overwrittes hover style
        "&:hover": {
          borderColor: state.isFocused
            ? "#22c3d5"
            : notIsValid
            ? "red"
            : "var(--shell-sand)"
        },
        placeholder: { color: "red" }
      })
    };

    return (
      <>
        <InlineError
          shouldShow={touched && error}
          error={error}
          label={label}
          labelName={name}
        />
        <ReactSelect
          classNamePrefix="react-select"
          styles={selectStyles}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={className}
          options={options}
          setValue={value}
          placeholder={placeholder}
          name={name}
        />
      </>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  placeholder: PropTypes.string
};

export { Select };
