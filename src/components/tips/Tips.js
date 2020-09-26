import React, { useState, useContext } from 'react';
import TipCard from './TipCard';
import { TipsContext } from '../contexts/TipsContext';

import TopCurves from '../../assets/images/top-curves.svg';

const Tips = () => {
    const [tips, setTips, isLoading, setIsLoading] = useContext(TipsContext);
    return (
        <>
            <div className='tips-wrapper'>
                <img src={TopCurves} alt='Topcurves' />
                {isLoading
                    ? 'Loading...'
                    : tips.map(tip => <TipCard key={tip.id} tip={tip} />)}
            </div>
        </>
    );
};

export default Tips;
