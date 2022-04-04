import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar-item'>
            <div className='container'>
                <NavLink to='/' className={({isActive}) => (isActive? 'me-1 p-2 text-decoration-none fs-5 navbar-items-active-color' : 'me-1 p-2 text-decoration-none fs-5 navbar-items-color')}>Home</NavLink>
                <NavLink to='/home'></NavLink>
                <NavLink to='/all-reviews' className={({isActive}) => (isActive? 'me-1 p-2 text-decoration-none fs-5 navbar-items-active-color' : 'me-1 p-2 text-decoration-none fs-5 navbar-items-color')}>Reviews</NavLink>
                <NavLink to='/dashboard' className={({isActive}) => (isActive? 'me-1 p-2 text-decoration-none fs-5 navbar-items-active-color' : 'me-1 p-2 text-decoration-none fs-5 navbar-items-color')}>Dashboard</NavLink>
                <NavLink to='/blogs' className={({isActive}) => (isActive? 'me-1 p-2 text-decoration-none fs-5 navbar-items-active-color' : 'me-1 p-2 text-decoration-none fs-5 navbar-items-color')}>Blogs</NavLink>
                <NavLink to='/about' className={({isActive}) => (isActive? 'me-1 p-2 text-decoration-none fs-5 navbar-items-active-color' : 'me-1 p-2 text-decoration-none fs-5 navbar-items-color')}>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;