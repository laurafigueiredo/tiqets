import React from 'react';

// Styles
import './Input.css';

// Typescript interfaces
interface InputProps {
    type?: string;
    placeholder?: string;
    theme?: string;
    onChange?: any;
    name: string;
    value?: string;
};

const Input: React.SFC<InputProps> = ({
    type = 'text',
    placeholder,
    theme,
    onChange,
    name,
    value,
}) => {
    return (
        <input
            type={ type }
            className={ !!theme ? `Input ${theme}` : 'Input' }
            placeholder={ placeholder }
            onChange={ onChange }
            value={ value }
            name={ name }
            id={ name }
        />
    );
}

export default Input;