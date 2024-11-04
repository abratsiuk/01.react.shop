import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const { goods, loading, isBasketShow, alertName, setGoods } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setGoods(
                    data.shop.map((item) => ({
                        id: item.offerId,
                        name: item.displayName,
                        description: item.displayDescription,
                        full_background:
                            item.displayAssets && item.displayAssets.length > 0
                                ? item.displayAssets[0].full_background
                                : null,
                        price: item.price ? item.price.regularPrice : null,
                    }))
                );
            })
            .catch((error) => {
                console.error(error);
                setGoods(null);
            });
    }, []);

    if (loading) {
        return <Preloader />;
    } else {
        return (
            <main className='container content'>
                {alertName && <Alert />}
                <Cart />
                {isBasketShow ? <BasketList /> : null}
                <GoodsList />
            </main>
        );
    }
}

export { Shop };
