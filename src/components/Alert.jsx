import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName: name = '', clearAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            clearAlert();
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} added to Cart!</div>
        </div>
    );
}

export { Alert };
