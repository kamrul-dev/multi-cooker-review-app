import React from 'react';
import useReviews from '../../hooks/useReviews';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <>
            <Banner></Banner>
            <div className='container mx-auto'>
                <h2 className='text-center mt-4 mb-5' style={{color:'#32a6a8'}}>Reviews By Our Customer</h2>
                <div className='row'>
                    {
                        reviews.map(review => <Reviews
                            key={review.id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
            </div>
        </>
    );
};
export default Home;