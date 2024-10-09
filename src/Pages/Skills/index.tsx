import { TECNOLOGYS } from '../../shared/CONSTANTS'
import './styles.css'

const CONSTANTS_SKILLS = [
    'Railway',
    'ExpressJS',
    'OAuth 2.0',
];

export const Skills = () => {
    return (
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
    )
}