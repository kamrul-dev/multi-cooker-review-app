import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className=''>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/home'></NavLink>
            <NavLink to='/reviews'>Reviews</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Navbar;