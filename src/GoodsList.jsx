import React from 'react';

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem
                    key={item.id}
                    {...item}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}

export { GoodsList };

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={full_background}
                    alt={name}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span
                    className='right'
                    style={{ fontSize: '1.8rem' }}
                >
                    {price} руб.
                </span>
            </div>
        </div>
    );
}
