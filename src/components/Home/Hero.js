import React from 'react';
import HomeIllustration from '../../assets/images/header-illustration.svg';
import TopCurves from '../../assets/images/top-curves.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p className='site-title'>Graph and Co</p>
                    <h1 className='lead'>Un métier, une passion</h1>
                    <p className='desc'>
                        Je suis un développeur web spécialisé dans la création
                        de sites internet modernes et intuitifs.
                    </p>
                    <div className='cta'>
                        <a href='#'>Voir mon travail</a>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={HomeIllustration} alt='Illustration' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
