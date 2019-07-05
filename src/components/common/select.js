/**
 * Summary: formik child select component using react-select
 * @docs https://react-select.com/
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

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
    let { options, className, value, placeholder } = this.props;
    let notIsValid = this.props.touched && this.props.error;

    const selectStyles = {
      control: (base, state) => ({
        ...base,
        borderWidth: "2px",
        borderStyle: " solid ",
        borderRadius: "8px",
        borderColor: state.isFocused ? "#ddd" : notIsValid ? "red" : "#ddd",
        // overwrittes hover style
        "&:hover": {
          borderColor: state.isFocused ? "#ddd" : notIsValid ? "red" : "#ddd"
        }
      })
    };
    return (
      <ReactSelect
        autoComplete="off"
        classNamePrefix="react-select"
        styles={selectStyles}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        className={className}
        options={options}
        setValue={value}
        placeholder={placeholder}
      />
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
