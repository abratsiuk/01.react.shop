import React from 'react';

function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
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
