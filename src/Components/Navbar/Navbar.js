import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar-item'>
            <div className='container'>
                <NavLink to='/' className='me-1 p-2 text-decoration-none fs-5 text-white'>Home</NavLink>
                <NavLink to='/home'></NavLink>
                <NavLink to='/reviews' className='me-1 p-2 text-decoration-none fs-5 text-white'>Reviews</NavLink>
                <NavLink to='/dashboard' className='me-1 p-2 text-decoration-none fs-5 text-white'>Dashboard</NavLink>
                <NavLink to='/blogs' className='me-1 p-2 text-decoration-none fs-5 text-white'>Blogs</NavLink>
                <NavLink to='/about' className='me-1 p-2 text-decoration-none fs-5 text-white'>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;