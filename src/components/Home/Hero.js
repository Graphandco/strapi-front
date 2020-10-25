import React from 'react';
import HomeIllustration from '../../assets/images/header-illustration.svg';
//import TopCurves from '../../assets/images/top-curves.svg';
import CustomButton from '../custom/CustomButton';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p className='site-title'>Graph and Co</p>
                    <h1 className='lead'>Un métier, une passion</h1>
                    <p className='desc orange-line'>
                        Je suis un développeur web spécialisé dans la création
                        de sites internet modernes et intuitifs.
                    </p>
                    <div className='cta'>
                        <CustomButton title='Voir mon travail' link='realisations' />
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={HomeIllustration} alt='Illustration' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
