import React from 'react';
import Logo from '../assets/images/logo.png';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className='shapes'>
                <svg
                    className='shape-1'
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M32.8,-57.4C46.3,-49.1,63.5,-47.9,67,-39.5C70.6,-31.1,60.4,-15.5,54.5,-3.4C48.6,8.7,46.8,17.4,39.7,19.4C32.5,21.5,19.8,16.9,12.3,28.3C4.8,39.6,2.4,66.8,-6.3,77.8C-15.1,88.8,-30.1,83.5,-43.7,75.7C-57.4,67.9,-69.5,57.5,-77.7,44.5C-86,31.4,-90.2,15.7,-81,5.3C-71.7,-5.1,-49,-10.1,-34.3,-11.9C-19.6,-13.7,-12.9,-12.3,-8.6,-25.8C-4.2,-39.4,-2.1,-67.9,3.8,-74.5C9.7,-81.1,19.4,-65.7,32.8,-57.4Z'
                        transform='translate(100 100)'
                    />
                </svg>
            </div>
            <img className='logo' src={Logo} alt='Logo' />
            <Nav />
        </header>
    );
};

export default Header;
