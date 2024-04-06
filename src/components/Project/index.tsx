import './styles.css'

import { PreviousImage } from "../PreviousImage"
import { TecnologyDescription } from "../TecnologyDescription"

import { ProjectPropInterface } from '../../shared/Interfaces';

const nameProject = "Platzi Video. Comienzo de una aplicación web de videos";
const projectURL = "https://dvnegrete.github.io/platzi_video/";
const tecs = [
    { name: "HTML5", url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/html5.png" },
    { name: "CSS3", url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/css3.png" }
]
const arrayImgUrls = [
    "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platzi-video-iniciarSesion.jpg",
    "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platziVideo.-mobile.jpg",
    "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platziVideo.jpg"
]

export const Project = ({}:ProjectPropInterface)=> {
    return (
        <div className="containerProject">
            <a href= { projectURL }>
                <h5>{ nameProject }</h5>
                <PreviousImage arrayUrl={ arrayImgUrls } />
            </a>
            <div className="tecnologys__class">
                <p>Tecnologías usadas:</p>
                <TecnologyDescription tecnologys={ tecs }/>
            </div>
        </div>
    )
}