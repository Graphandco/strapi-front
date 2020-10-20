import React, { useState, useContext } from 'react';
import TipCard from './TipCard';
import { TipsContext } from '../contexts/TipsContext';

import PageContent from '../PageContent';

const Tips = () => {
    const [tips, setTips, isLoading, setIsLoading] = useContext(TipsContext);
    return (
        <PageContent title='Coding Tips'>
            <div className='tips-wrapper'>
                {/* <div class='divider divider-top'>
                    <svg
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1200 120'
                        preserveAspectRatio='none'
                    >
                        <path
                            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                            class='shape-fill'
                        ></path>
                    </svg>
                </div>
                <div class='divider divider-bottom'>
                    <svg
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1200 120'
                        preserveAspectRatio='none'
                    >
                        <path
                            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                            class='shape-fill'
                        ></path>
                    </svg>
                </div> */}
                {isLoading
                    ? 'Loading...'
                    : tips.map(tip => <TipCard key={tip.id} tip={tip} />)}
            </div>
            </PageContent>
    );
};

export default Tips;
