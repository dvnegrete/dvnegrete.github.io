import { ImageURLInterface } from "./ImageURL.interface";
import { TecnologyPropInterface } from "./TecnologyProp.interface";

export interface ProjectPropInterface {
    nameProject: string;
    projectURL: string;
    tecs: TecnologyPropInterface;
    arrayImgUrls: ImageURLInterface;
}