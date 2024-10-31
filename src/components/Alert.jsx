import React, { useEffect } from 'react';

function Alert(props) {
    const { name, clearAlert = Function.prototype } = props;

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
