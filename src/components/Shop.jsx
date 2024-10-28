import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                data.shop &&
                    setGoods(
                        data.shop.map((item) => ({
                            id: item.offerId,
                            name: item.displayName,
                            description: item.displayDescription,
                            full_background:
                                item.displayAssets &&
                                item.displayAssets.length > 0
                                    ? item.displayAssets[0].full_background
                                    : null,
                            price: item.price ? item.price.regularPrice : null,
                        }))
                    );
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Preloader />;
    } else {
        return (
            <main className='container content'>
                <GoodsList
                    goods={goods}
                    addToBasket={addToBasket}
                />
                <Cart quantity={order.length} />
            </main>
        );
    }
}

export { Shop };
