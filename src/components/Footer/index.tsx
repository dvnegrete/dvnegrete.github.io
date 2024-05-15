import { TECNOLOGYS } from '../../shared/CONSTANTS';
import './styles.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                Sitio desarrollado con 
                <a href="https://github.com/dvnegrete/dvnegrete.github.io" target='_blank'>
                    <span> React + Typescript</span> 
                </a>
            </p>
            <figure>
                <img src={TECNOLOGYS.React.url} alt={TECNOLOGYS.React.name} />
                <img src={TECNOLOGYS.TS.url} alt={TECNOLOGYS.TS.name} />
            </figure>
        </footer>
    )
}