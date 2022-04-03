import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    const cutomerReviews = reviews.length > 3 ? reviews.slice(0, 3) : reviews;
    // if(reviews.length > 3){
    //    const customerReviews = reviews.slice(0, 3)
    //     console.log(customerReviews)
    // }

    return (
        <>
            <Banner></Banner>
            <div className='container mx-auto mb-5'>
                <h2 className='text-center mt-4 mb-5' style={{ color: '#1DACBF' }}>Reviews By Our Customer</h2>
                <div className='row'>
                    {
                        cutomerReviews.map(cutomerReview => <Reviews
                            key={cutomerReview.id}
                            cutomerReview={cutomerReview}
                        ></Reviews>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={() => navigate('/all-reviews')} className='btn button-in-banner'>See All Reviews</button>
                </div>
            </div>
        </>
    );
};
export default Home;