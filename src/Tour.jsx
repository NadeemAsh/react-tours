import React, { useState } from 'react'

const Tour = ({ id, name, image, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <article className='single-tour'>
            <img className='img' src={image} alt={name} />
            <span className='tour-price'>${price}</span>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(0, 100)}...`}</p>
                <button className='info-btn' onClick={() => setReadMore(!readMore)}>{readMore ? `Show Less` : `Read more`}</button>
                <button className='btn btn-block delete-btn' onClick={() => removeTour(id)}>Not interested</button>
            </div>
        </article>
    )
}

export default Tour