import React, {useContext} from 'react'
import { RealisationsContext } from '../contexts/RealisationsContext';
import CustomButton from '../custom/CustomButton'

const RealisationsLead = () => {

    const [realisations, setTips, isLoading, setIsLoading] = useContext(RealisationsContext);
    const filteredRealisations = realisations.filter( realisation => realisation.name === 'Willow Tarot' || realisation.name === 'Burgerio' || realisation.name === 'Fylo');
    return (
        <section className='home-realisations'>
            <div className="description">
                <h2 className="orange-line">Réalisations</h2>
                <p>Voici quelques exemples des dernières réalisations que j'ai eu l'occasion de développer.</p>
            </div>
            <div className="realisations">
            {filteredRealisations.map((realisation, index) => (
                <a className='realisation' key={index} href={realisation.link}
                target='blank'
                title={`Aller sur le site ${realisation.name}`}>
                    <div className='image'>
                        <img
                            src={realisation.image}
                            alt={realisation.name}
                            width='500px'
                        />
                    </div>
                    <div className='content'>
                        <h2 className='name orange-line'>{realisation.name}</h2>
                        {/* <div className='desc'>{realisation.desc}</div> */}
                        {/* <div className='link'>
                            <a
                                href={realisation.link}
                                target='blank'
                                title={`Aller sur le site ${realisation.name}`}
                            >
                            </a>
                        </div> */}
                    </div>
                </a>
            ))}
            <div className="cta">
                <CustomButton title='Tout voir' link='realisations' />
            </div>
            </div>
        </section>
    )
}

export default RealisationsLead
