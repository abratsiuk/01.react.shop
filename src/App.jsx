import React, { useState } from 'react';

import { Cart } from './Cart';
import { GoodsList } from './GoodsList';

const goods = [
    { id: 1, name: 'Name 1', price: 100 },
    { id: 2, name: 'Name 2', price: 200 },
];

// don't change the Component name "App"
export default function App() {
    const [order, setOrder] = useState([]);

    // TODO: implement component
    const addToBasket = (item) => {
        if (!order.find((orderItem) => orderItem.id === item.id)) {
            setOrder((prevOrder) => [...prevOrder, item]);
        }
    };

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            <GoodsList
                goods={goods}
                addToBasket={addToBasket}
            />
        </main>
    );
}
