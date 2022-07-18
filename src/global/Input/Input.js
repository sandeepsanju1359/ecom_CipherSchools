import React from 'react';
import "./Input.css"

function Input({text,type}) {
    return (
        <div>

            <input className='global_input' placeholder={text} type={type} />
            
        </div>
    );
}

export default Input;