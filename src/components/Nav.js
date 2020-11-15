import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Nav = ( {navScrolled} ) => {

    
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
            name: 'A Propos',
            path: '/about'
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
        <NavBar navScrolled={navScrolled} className='navbar'>
            {navLinks.map(navLink => (
                <NavBarLink navScrolled={navScrolled} to={navLink.path} key={navLink.name} exact>
                    <span>{navLink.name}</span>
                </NavBarLink>
            ))}
            <PageIndicator navScrolled={navScrolled} className='page-indicator' />
        </NavBar>
    );
};

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: transparent;
    transition: 0.3s;
    position: relative;
    transition: 0.3s;
    width: ${props => props.navScrolled ? '100%' : '60%'}
`;

const NavBarLink = styled(NavLink)`
    padding: 0 2.5rem;
    text-transform: capitalize;
    font-weight: 700;
    display: flex;
    justify-content: center;
    width: 20%;
    transition: 0.3s;
    white-space: nowrap;
    opacity: ${props => props.navScrolled ? 0.7 : 1};
    color: ${props => props.navScrolled && 'var(--bg-color)'};

    &:hover,
    &.active {
        color: ${props => props.navScrolled ? 'black' : 'white'};
        opacity: ${props => props.navScrolled && 1};
    }

    &:nth-child(1).active ~ .page-indicator {
        left: 0;
    }
    &:nth-child(2).active ~ .page-indicator {
        left: 20%;
    }
    &:nth-child(3).active ~ .page-indicator {
        left: 40%;
    }
    &:nth-child(4).active ~ .page-indicator {
        left: 60%;
    }
    &:nth-child(5).active ~ .page-indicator {
        left: 80%;
    }
    &:nth-child(1):hover ~ .page-indicator {
        left: 0;
    }
    &:nth-child(2):hover ~ .page-indicator {
        left: 20%;
    }
    &:nth-child(3):hover ~ .page-indicator {
        left: 40%;
    }
    &:nth-child(4):hover ~ .page-indicator {
        left: 60%;
    }
    &:nth-child(5):hover ~ .page-indicator {
        left: 80%;
    }
`;

const PageIndicator = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: ${props => props.navScrolled ? '4px' : '5px'};
    background-color: var(--orange);
    transition: 0.3s;
    transform: scaleX(0.8);
`;

export default Nav;
