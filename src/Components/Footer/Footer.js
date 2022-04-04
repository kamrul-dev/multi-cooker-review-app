import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-center mb-4'>
            <p>&copy; All right reserved to <span style={{ color: '#1DACBF' }}>Multi-Cooker</span></p>
            <a style={{ color: '#1DACBF' }} className='text-decoration-none' href="https://github.com/kamrul-dev">Developed by Kamrul-Hasan</a>
        </div>
    );
};

export default Footer;