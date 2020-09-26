import React from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <img className='logo' src={Logo} alt='Logo' />
        </header>
    );
};

export default Header;
