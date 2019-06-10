import React from 'react';

// Styles
import './Input.css';

// Interface
interface InputProps {
    type?: string;
    placeholder: string;
    theme?: string;
};

const Input: React.SFC<InputProps> = ({
    type = 'text',
    placeholder,
    theme,
}) => {
    return (
        <input
            type={ type }
            className={ !!theme ? `Input ${theme}` : 'Input' }
            placeholder={ placeholder }
        />
    );
}

export default Input;