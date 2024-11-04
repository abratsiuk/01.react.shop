import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const {
        removeFromBasket = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = useContext(ShopContext);

    return (
        <li className='collection-item'>
            {name} {price} &curren;
            <i
                className='material-icons basket-quantity'
                onClick={() => decreaseQuantity(id)}
            >
                remove
            </i>
            x {quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => increaseQuantity(id)}
            >
                add
            </i>
            <span> = {price * quantity} &curren;</span>
            <span
                className='secondary-content basket-delete'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons'>clear</i>
            </span>
        </li>
    );
}

export { BasketItem };
