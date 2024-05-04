import './styles.css'
import { ProjectPropInterface } from '../../shared/Interfaces';

import { PreviousImage, TecnologyDescription } from "../";
import { Link } from 'react-router-dom';


export const Project = ({ projectURL, webURL, nameProject, description, arrayImgUrls, tecs }: ProjectPropInterface) => {

    const typeOfWebSite = (url: string) => {
        return (
            url.includes("http") ?
                <a
                    href={webURL}
                    target='_blank'>
                    Ver sitio web
                </a>
                :
                <Link
                    to={String(webURL)}                            >
                    Ver sitio web
                </Link>
        )
    }

    const structureDescription = (description: string[]) => {
        return description.map(paragraph => (
            <p>{paragraph}</p>
        ))
    }

    return (
        <div className="containerProject">
            <div className='containerProject__name'>
                <h5>{nameProject}</h5>
                {
                    arrayImgUrls.arrayUrl.length > 0 ?
                        <PreviousImage
                            arrayUrl={arrayImgUrls.arrayUrl}
                            name={nameProject}
                        />
                        : <></>
                }
            </div>

            <div className='containerProject__description'>{structureDescription(description)}</div>
            <div className="tecnologys__class">
                <p>Tecnologías usadas:</p>
                <div>
                    <TecnologyDescription tecnologys={tecs.tecnologys} />
                </div>
            </div>
            <div className='containerProject__buttons'>
                <a href={projectURL} target='_blank'>Ver Codigo</a>
                {
                    webURL === undefined || webURL === "" ?
                        <></> :
                        typeOfWebSite(webURL)
                }
            </div>
        </div>
    )
}