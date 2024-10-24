import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
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
                <GoodsList goods={goods} />
            </main>
        );
    }
}

export { Shop };
