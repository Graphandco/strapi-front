import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [navScrolled, setNavScrolled] = useState(false)

    
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

const changeToScrolled = () => {
    if(window.scrollY >= 100) {
        setNavScrolled(true)
    } else {
        setNavScrolled(false)
    }
}

window.addEventListener('scroll', changeToScrolled)

    return (
        <nav className={navScrolled ? 'navbar active' : 'navbar'}>
            {navLinks.map(navLink => (
                <NavLink to={navLink.path} key={navLink.name} exact>
                    <span>{navLink.name}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default Nav;
