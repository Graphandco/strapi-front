import React, {useContext} from 'react'
import { RealisationsContext } from '../contexts/RealisationsContext';

const RealisationsLead = () => {

    const [realisations, setTips, isLoading, setIsLoading] = useContext(RealisationsContext);
    const filteredRealisations = realisations.filter( realisation => realisation.name === 'Willow Tarot' || realisation.name === 'Burgerio');
    return (
        <div>
            {filteredRealisations.map((realisation, index) => (
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    )
}

export default RealisationsLead
