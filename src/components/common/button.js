//work in progress...want to create a reusable button
import React, { PropTypes } from 'react';
import './styles.css'

const Button = (props) => {

    return (
        <button
            className="submit-button"
        // onClick={callback(1)}
        >{props.title}</button>
    )
}

export default Button;