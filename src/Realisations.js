import React, {useContext} from 'react';

import Portfolio from './assets/images/realisations/portfolio.jpg';
import PageContent from './components/PageContent';
import CustomButton from './components/custom/CustomButton';
//import CatScroll from '../shared/images/realisations/cat-scroll.jpg';


import { RealisationsContext } from './components/contexts/RealisationsContext';


const Realisations = () => {
    const [realisations, setTips, isLoading, setIsLoading] = useContext(RealisationsContext);
    return (
        <PageContent title='Réalisations'>
            <section className='realisations'>
                <div className='liste'>
                    <div className='description'>
                        <img src={Portfolio} alt='Portfolio' />
                        <div className='content'>
                            <h2 className='orange-line'>Portfolio</h2>
                            <p>
                                Retrouvez ici l'ensemble de mes réalisations,
                                aussi bien mes projets professionnels,
                                personnels ou simples maquettes et exercices
                                pratiques.
                            </p>
                        </div>
                    </div>
                    {realisations.map((realisation, index) => (
                        <div className='realisation' key={index}>
                            <div className='image'>
                                <img
                                    src={realisation.image}
                                    alt={realisation.name}
                                />
                            </div>
                            <div className='content'>
                                <div className='name orange-line'>{realisation.name}</div>
                                <div className='desc'>{realisation.desc}</div>
                                <div className='link'>
                                    <a
                                        href={realisation.link}
                                        target='blank'
                                        title={`Aller sur le site ${realisation.name}`}
                                    >
                                <CustomButton title='Voir'  />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageContent>
    );
};

export default Realisations;
