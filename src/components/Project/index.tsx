import './styles.css'
import { ProjectPropInterface } from '../../shared/Interfaces';

import { PreviousImage, TecnologyDescription } from "../";


export const Project = ({ projectURL, webURL, nameProject, description, arrayImgUrls, tecs }: ProjectPropInterface) => {
    return (
        <div className="containerProject">
            <div className='containerProject__name'>
                <h5>{nameProject}</h5>
                {
                    arrayImgUrls.arrayUrl.length > 0 ?
                        <PreviousImage arrayUrl={arrayImgUrls.arrayUrl} />
                        : <></>
                }
            </div>

            <p className='containerProject__description'>{description}</p>
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
                        <a href={webURL} target='_blank'>Ver sitio web</a>
                }
            </div>
        </div>
    )
}