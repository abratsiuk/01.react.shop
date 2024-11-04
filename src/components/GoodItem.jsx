import React, { useContext } from 'react';
import { ShopContext } from '../context';

function GoodItem(props) {
    const { id, name, description, full_background, price } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={full_background}
                    alt={name}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            description,
                            full_background,
                            price,
                        })
                    }
                >
                    Add to Cart
                </button>
                <span
                    className='right'
                    style={{ fontSize: '1.8rem' }}
                >
                    {price} &curren;
                </span>
            </div>
        </div>
    );
}

export { GoodItem };
