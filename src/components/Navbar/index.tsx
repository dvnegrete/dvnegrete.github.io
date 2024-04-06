import { useEffect, useState } from 'react';
import './styles.css';

export const Navbar = ( { hidden }:{hidden: boolean} )=> {

    const showNav = ()=> {
        const breakpoint = "720px";
        const mediaquery = window.matchMedia(`(min-width: ${breakpoint})`);
        return mediaquery.matches ? false : hidden;
    }
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 530) {
            showNav();
        }
    }, [windowWidth]);
    
    return (
        <nav>
            <ul className={ showNav() ? "nav__hide" : "nav" }>
                <li>
                    <a >
                    Inicio
                    </a>
                </li>
                <li>
                    <a >
                    Portafolio
                    </a>
                </li>
                <li>
                    <a id="i-am">
                    Sobre mi...
                    </a>
                </li>
                <li>
                    <a id="skills">
                    Skills
                    </a>
                </li>
                <li>
                    <a data-node="noDisponible">
                    Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}