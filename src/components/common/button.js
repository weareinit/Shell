//work in progress...want to create a reusable button
import React from 'react';
import './styles.css'

const Button = (props) => {
    const { callback, title, id } = props;
    return (
        <button
            className="submit-button"
            id={id}
            type="button"
            // onClick={callback()}
        >{title}</button>
    )
}

export default Button;