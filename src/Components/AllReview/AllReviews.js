import React from 'react';
import useReviews from '../../hooks/useReviews';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <>
            <div className='row container mx-auto mt-5 mb-5'>
                {
                    reviews.map(review =>
                        <div className='col-md-4'>
                            <div className='card d-flex align-items-center reviews-section border-0'>
                                <img src={review.image} alt="" />
                                <span className='mt-3'>{review.ratings} star</span>
                                <div className='card-body'>
                                    <h5 className='text-center'>{review.name}</h5>
                                    <p>{review.post}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AllReviews;