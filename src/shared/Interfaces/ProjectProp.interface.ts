import { ImageURLInterface, TecnologyPropInterface } from "./";

export interface ProjectPropInterface {
    nameProject: string;
    projectURL: string;
    tecs: TecnologyPropInterface;
    arrayImgUrls: ImageURLInterface;
}