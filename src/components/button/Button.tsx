import React from 'react';

// Styles
import './Button.css';

// Typescript interfaces
interface ButtonProps {
    type?: 'button' | 'submit';
    text: string;
    theme?: string;
};

const Button: React.SFC<ButtonProps> = ({
    text,
    type = 'button',
    theme,
}) => {
    return (
        <button
            className={ !!theme ? `Button ${theme}` : 'Button' }
            type={ type }>
            { text }
        </button>
    );
}

export default Button;