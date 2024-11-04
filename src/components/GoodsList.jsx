import React, { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodItem } from './GoodItem';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className='goods'>
            {goods.map((good) => (
                <GoodItem
                    key={good.id}
                    {...good}
                />
            ))}
        </div>
    );
}

export { GoodsList };
