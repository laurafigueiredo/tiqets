import React from 'react';

// Styles
import './Card.css';

// Typescript interfaces
interface CardProps {
    title: string;
    summary: string;
    price: number;
    image: string;
    url: string;
    theme?: string;
};

const Card: React.SFC<CardProps> = ({
    title,
    summary,
    price,
    image,
    url,
    theme,
}) => {
    return (
        <a
            className={ !!theme ? `Card ${theme}` : 'Card' }
            href={ url }
            target='_blank'
            rel='noopener noreferrer'>
            <img
                src={ image }
                alt={ title }
                className='Card-image' />
            <div className='Card-textWrapper'>
                <div>
                    <h3 className='Card-title'>{ title }</h3>
                    <p className='Card-summary'>{ summary }</p>
                </div>
                <span className='Card-price'>&euro; { price }</span>
            </div>
        </a>
    );
}

export default Card;