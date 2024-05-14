import { TECNOLOGYS } from '../../shared/CONSTANTS';
import './styles.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                Sitio desarrollado con React + Typescript
            </p>
            <figure>
                <img src={TECNOLOGYS.React.url} alt={TECNOLOGYS.React.name} />
                <img src={TECNOLOGYS.TS.url} alt={TECNOLOGYS.TS.name} />
            </figure>
        </footer>
    )
}