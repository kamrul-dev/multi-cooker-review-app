import React from 'react';
import CookerImage from '../../Assests/images/cooker.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='row banner-section container mx-auto'>
            <div className='col-md-8'>
                <div>
                    <h1 className='display-4 fw-bold'>Cooking Is Spacial Art!</h1>
                    <h1 className='mb-3'>Let's Try this <span style={{color:'#32a6a8'}}>KitchenAid</span></h1>
                    <p className='mb-4'>A pressure cooker builds up and traps steam within its central chamber, creating an extremely high temperature inside that vastly reduces cooking times, tenderises even the toughest of meats, and reduces nutrient loss</p>
                    <button className='btn button-in-banner'>See Live Demo</button>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='cooker-img'>
                    <img className='img-fluid' src={CookerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;