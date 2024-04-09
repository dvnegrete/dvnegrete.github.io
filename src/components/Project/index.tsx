import './styles.css'
import { ProjectPropInterface } from '../../shared/Interfaces';

import { PreviousImage, TecnologyDescription } from "../";


export const Project = ({ projectURL, nameProject, arrayImgUrls, tecs }:ProjectPropInterface)=> {
    console.log(nameProject)
    return (
        <div className="containerProject">
            <a href= { projectURL }>
                <h5>{ nameProject }</h5>
                <PreviousImage arrayUrl={ arrayImgUrls.arrayUrl } />
            </a>
            <div className="tecnologys__class">
                <p>Tecnologías usadas:</p>
                <TecnologyDescription tecnologys={ tecs.tecnologys }/>
            </div>
        </div>
    )
}