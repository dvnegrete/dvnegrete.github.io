import { ImageURLInterface, TecnologyPropInterface } from "./";

export interface ProjectPropInterface {
    nameProject: string;
    description: string[];
    projectURL: string;
    webURL?: string;
    tecs: TecnologyPropInterface;
    arrayImgUrls: ImageURLInterface;
}