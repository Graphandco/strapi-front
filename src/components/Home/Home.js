import React from 'react';
import About from './About';
import Hero from './Hero';
import RealisationsLead from './RealisationsLead';

import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'

const Home = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <Hero />
            <About />
            <RealisationsLead />
        </motion.div>
    );
};

export default Home;
