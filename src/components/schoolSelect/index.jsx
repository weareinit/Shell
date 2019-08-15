/**
 * select component for schools using react-select
 */

import React from 'react'
import PropTypes from 'prop-types'
import { default as AsyncSelect } from 'react-select/async'
import { InlineError } from '../errorMessage'
import './styles.css'

class SchoolSelect extends React.Component {
  handleChange = async value => {
    // call setFieldValue and manually update values.this.props.name
    await this.props.onChange(this.props.name, value.value)
  }

  handleBlur = async () => {
    // call setFieldTouched and manually update touched.this.props.name
    await this.props.onBlur(this.props.name, true)
  }

  render () {
    let {
      options,
      className,
      value,
      placeholder,
      label,
      error,
      touched,
      name
    } = this.props
    let notIsValid = touched && error

    const filterList = (list, input) => {
      return list.filter(item => {
        let terms = input.split(" ");
        for (const term of terms) {
          if(!item.label.toLowerCase().includes(term.toLowerCase()))
            return false;
        }
        return true;
      }
      )
    };

    const initalOptions = () => {
      let initialList = options.slice(0,51)
      addDisclaimer(initialList);

      return initialList;
    };

    const addDisclaimer = (list) => {
      let message = {
        label: "This list contains more than 50 schools. Please refine your search to see more.",
        value: "",
        isDisabled: true
      }
      list.push(message);
    }

    const loadList = (input) =>
    {
      if(input == ''){
        return initalOptions();
      }

      let list = filterList(options, input);
      if(list.length > 50)
      {
        list = list.slice(0,51);
        addDisclaimer(list);
      }
      return list;
    }

    const promiseOptions = inputValue =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(loadList(inputValue));
        }, 1000);
    });

    const selectStyles = {
      control: (base, state) => ({
        ...base,
        padding: '3px',
        borderWidth: '1px',
        borderStyle: ' solid ',
        borderRadius: '8px',
        borderColor: state.isFocused
          ? '#22c3d5'
          : notIsValid
            ? 'red'
            : 'var(--shell-sand)',
        // overwrittes hover style
        '&:hover': {
          borderColor: state.isFocused
            ? '#22c3d5'
            : notIsValid
              ? 'red'
              : 'var(--shell-sand)'
        },
        placeholder: { color: 'red' }
      }),
      option: (base, state) => ({
        ...base, 
        color: state.isDisabled ? 'rgba(255,0,0,.5)' : base.color,
        fontWeight: state.isDisabled ? 'bold' : base.fontWeight
      })
    }

    return (
      <>
        <InlineError
          shouldShow={touched && error}
          error={error}
          label={label}
          labelName={name}
        />
        <AsyncSelect
          classNamePrefix='react-select'
          styles={selectStyles}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={className}
          loadOptions={promiseOptions}
          defaultOptions={true}
          setValue={value}
          placeholder={placeholder}
          name={name}
        />
      </>
    )
  }
}

SchoolSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  placeholder: PropTypes.string
}

export { SchoolSelect }
