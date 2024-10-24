import React from 'react';
import { GoodItem } from './GoodItem';

function GoodsList(props) {
    const { goods = [] } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((good) => (
                <GoodItem
                    key={good.offerId}
                    {...good}
                />
            ))}
        </div>
    );
}

export { GoodsList };
