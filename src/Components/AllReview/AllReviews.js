import React from 'react';
import useReviews from '../../hooks/useReviews';
import SeeAllReviews from '../SeeAllReviews/SeeAllReviews';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='row container mx-auto mt-5 mb-5'>
            {
               reviews.map(review => <SeeAllReviews
                key={review.id}
                review={review}
               ></SeeAllReviews>) 
            }
        </div>
    );
};

export default AllReviews;