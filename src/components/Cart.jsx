import React, { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
    const { order, handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const quantity = order.length;

    return (
        <button
            className='cart blue darken-4 white-text'
            onClick={handleBasketShow}
            style={{ border: 'none', outline: 'none' }}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </button>
    );
}

export { Cart };
