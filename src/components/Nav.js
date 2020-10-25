import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    
    const navLinks = [
        {
            name: 'accueil',
            path: '/'
        },
        {
            name: 'realisations',
            path: '/realisations'
        },
        {
            name: 'tips',
            path: '/tips'
        },
        {
            name: 'contact',
            path: '/contact'
        }
    ];





    return (
        <nav className='navbar'>
            {navLinks.map(navLink => (
                <NavLink to={navLink.path} key={navLink.name} exact>
                    <span>{navLink.name}</span>
                </NavLink>
            ))}
            <div className="page-indicator"></div>
        </nav>
    );
};

export default Nav;
