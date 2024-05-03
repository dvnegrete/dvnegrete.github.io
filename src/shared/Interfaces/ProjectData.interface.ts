import { ImageURLInterface, TecnologyObjInterface } from "./";

export interface ProjectDataInterface {
    nameProject: string;
    projectURLGithub: string;
    webURL?: string;
    tecnologys: TecnologyObjInterface[];
    imagePreviousProject: ImageURLInterface;
    description: string[];
}