import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export const Navbar = ({ hidden }: { hidden: boolean }) => {

    const showNav = () => {
        const breakpoint = "860px";
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
            <ul className={showNav() ? "nav__hide" : "nav"}>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/portafolio">
                        Portafolio
                    </Link>
                </li>
                <li>
                    <Link to="/sobre-mi">
                        Sobre mi...
                    </Link>
                </li>
                <li>
                    <Link to="/skills">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}