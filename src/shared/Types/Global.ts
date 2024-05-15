import { Dispatch, SetStateAction } from "react";

export type GlobalType = {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    valueModal: boolean
    setValueModal: Dispatch<SetStateAction<boolean>>
}