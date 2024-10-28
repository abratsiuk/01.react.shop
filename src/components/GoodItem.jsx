function GoodItem(props) {
    const {
        id,
        name,
        description,
        full_background,
        price,
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
                            description,
                            full_background,
                            price,
                        })
                    }
                >
                    Buy it Now
                </button>
                <span
                    className='right'
                    style={{ fontSize: '1.8rem' }}
                >
                    {price} &curren;
                </span>
            </div>
        </div>
    );
}

export { GoodItem };
