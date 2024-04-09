import { ImageURLInterface, TecnologyObjInterface } from "./";

export interface ProjectDataInterface {
    nameProject: string;
    projectURL: string;
    tecnologys: TecnologyObjInterface[];
    imagePreviousProject: ImageURLInterface;
    description: string;
}