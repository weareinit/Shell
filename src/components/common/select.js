import React from 'react';
import { default as ReactSelect } from 'react-select';


class Select extends React.Component {

    handleChange = async (value) => {
        // this is going to call setFieldValue and manually update values.this.props.name
        await this.props.onChange(this.props.name, value.value);
        console.log(this.props)
    };

    handleBlur = async () => {
        // this is going to call setFieldTouched and manually update touched.this.props.name
        await this.props.onBlur(this.props.name, true);
    };

    render() {

        let notIsValid = this.props.touched && this.props.error;

        console.log(notIsValid)

        const customStyles = {
            control: (base, state) => ({
                ...base,
                // state.isFocused can display different borderColor if you need it
                borderWidth: '2px',
                borderStyle: ' solid ',
                borderRadius: '8px',
                borderColor: state.isFocused ?
                    '#ddd' : notIsValid ?
                        'red' : '#ddd',
                // overwrittes hover style
                '&:hover': {
                    borderColor: state.isFocused ?
                        '#ddd' : notIsValid ?
                            'red' : '#ddd'
                }
            })
        }
        return (
            <ReactSelect
                styles={customStyles}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className={this.props.className}
                options={this.props.options}
                setValue={this.props.value}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export { Select };