import React from 'react';
import CookerImage from '../../Assests/images/cooker.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='row'>
            <div className='col-md-7'>
                <h1>Cooking Is Spacial Art</h1>
                <h1>Let's Try this KitchenAid</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae non dolorem fugit illo quidem vero, eaque omnis reiciendis.</p>
                <button className='btn btn-info'>See Live Demo</button>
            </div>
            <div className='col-md-4'>
                <div className='cooker-img'>
                    <img src={CookerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;