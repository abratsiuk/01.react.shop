function GoodItem(props) {
    const {
        offerId: id,
        displayName: name,
        displayDescription: description,
        displayAssets: [{ full_background }],
        price: { regularPrice: price },
    } = props;
    return (
        <div
            className='card'
            id={id}
        >
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
                <button className='btn'>Buy it Now</button>
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
