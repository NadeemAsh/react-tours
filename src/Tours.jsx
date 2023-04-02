import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour, fetchTours }) => {
    console.log(tours)
    return (
        <section>
            <div className="title">
                {
                    tours.length < 1 ? (
                        <>
                            <h3>No More Tours</h3>
                            <div className="title-underline"></div>
                            <button className='btn' onClick={() => fetchTours()}>Refresh</button>
                        </>
                    ) : (
                        <>
                            <h3>Our Tours</h3>
                            <div className="title-underline"></div>
                        </>
                    )
                }
            </div>
            <div className="tours">
                {
                    tours.map((tour, index) => {
                        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    })
                }
            </div>
        </section>
    )
}

export default Tours