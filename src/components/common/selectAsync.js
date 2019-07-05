/**
 * Summary: An async select component using react-select
 * @docs https://react-select.com/async
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import schools from "../../config/data/schools";

type State = {
  inputValue: string
};

const filterColors = (inputValue: string) => {
  return schools.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

class SelectAsync extends Component<*, State> {
  state = { inputValue: "" };
  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
    return inputValue;
  };

  handleChange = async value => {
    // call setFieldValue and manually update values.this.props.name
    await this.props.onChange(this.props.name, value.value);
  };

  // handleBlur = async () => {
  //   //call setFieldTouched and manually update touched.this.props.name
  //   await this.props.onBlur(this.props.name, true);
  // };
  render() {
    console.log(this.state.inputValue);
    let { className, value, placeholder } = this.props;
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
      <AsyncSelect
        autoComplete="off"
        classNamePrefix="react-select"
        styles={selectStyles}
        onChange={this.handleChange}
        // onBlur={this.handleBlur}
        className={className}
        // options={options}
        // setValue={value}
        placeholder={placeholder}
        //new stuff
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={this.handleInputChange}
      />
    );
  }
}
export { SelectAsync };
