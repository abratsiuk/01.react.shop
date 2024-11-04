import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

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
        setAlertName(item.name);
    };
    const removeFromBasket = (id) => {
        const newOrder = order.filter((el) => el.id !== id);
        setOrder(newOrder);
    };
    const increaseQuantity = (id) => {
        const newOrder = order.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decreaseQuantity = (id) => {
        const newOrder = order.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity > 0 ? el.quantity - 1 : 0;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    };
    const clearAlert = () => {
        console.log('clear alert');
        setAlertName('');
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
                {alertName && (
                    <Alert
                        name={alertName}
                        clearAlert={clearAlert}
                    />
                )}
                <Cart
                    quantity={order.length}
                    handleBasketShow={handleBasketShow}
                />
                {isBasketShow ? (
                    <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                ) : null}
                <GoodsList
                    goods={goods}
                    addToBasket={addToBasket}
                />
            </main>
        );
    }
}

export { Shop };
