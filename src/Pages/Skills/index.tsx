import { TECNOLOGYS } from '../../shared/CONSTANTS'
import './styles.css'

const CONSTANTS_SKILLS = [
    'Railway',
    'ExpressJS',
    'JWT',
];

export const Skills = () => {
    return (
        <section className='section__skills'>
            <ul className='skills__img'>
                {
                    Object.values(TECNOLOGYS).map(tecnology => (
                        <li>
                            <img src={tecnology.url} />
                            <p>{tecnology.name}</p>
                        </li>
                    ))
                }
                {
                    CONSTANTS_SKILLS.map(skill => (
                        <li>
                            <p>{skill}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}