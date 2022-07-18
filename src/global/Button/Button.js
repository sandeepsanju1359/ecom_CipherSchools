import React from 'react';
import "./Button.css"

function Button({text,onClick}) {
    return (
        <button className='global_button' onClick={onClick}>{text}</button>
    );
}

export default Button;