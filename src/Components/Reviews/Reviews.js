import React from 'react';
import './Reviews.css';

const Reviews = ({ cutomerReview }) => {
    const { image, ratings, name, post } = cutomerReview;
    return (
        <div className='col-md-4'>
            <div className='card d-flex align-items-center reviews-section border-0'>
                <img src={image} alt="" />
                <span className='mt-3'>{ratings} star</span>
                <div className='card-body'>
                    <h5 className='text-center'>{name}</h5>
                    <p>{post}</p>
                </div>
            </div>

        </div>
    );
};
export default Reviews;