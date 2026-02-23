import { TECNOLOGYS } from '../../shared/CONSTANTS'
import './styles.css'

const CONSTANTS_SKILLS = [
    'Railway',
    'ExpressJS',
    'OAuth 2.0',
];

const ARCHITECTURE_SKILLS = [
    'Clean Architecture',
    'Principios SOLID',
    'Design Patterns',
    'Dependency Injection',
    'Scrum / Metodologías Ágiles',
];

export const Skills = () => {
    return (
        <>
            <section className='section__skills'>
                <ul className='skills__img'>
                    {
                        Object.values(TECNOLOGYS).map(tecnology => (
                            <li className='animate__animated animate__fadeInDownBig'>
                                <img src={tecnology.url} />
                                <p>{tecnology.name}</p>
                            </li>
                        ))
                    }
                    {
                        CONSTANTS_SKILLS.map(skill => (
                            <li className='animate__animated animate__fadeInDownBig'>
                                <p>{skill}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <h2 className='title--certifications'>Arquitectura & Buenas Prácticas</h2>
            <section className='section__skills'>
                <ul className='skills__img'>
                    {
                        ARCHITECTURE_SKILLS.map(skill => (
                            <li className='animate__animated animate__fadeInDownBig'>
                                <p>{skill}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <h2 className='title--certifications'>Certificaciones</h2>
            <section className='certifications'>
                <p>
                    <a href='https://dvnimage.blob.core.windows.net/certificates/Azure%20Fundamentals.pdf'>
                        AZ-900
                    </a>
                </p>
                <embed
                    src="https://dvnimage.blob.core.windows.net/certificates/Azure%20Fundamentals.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                />
            </section>
        </>
    )
}