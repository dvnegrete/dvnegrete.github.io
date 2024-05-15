import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type GlobalType = {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    valueModal: boolean
    setValueModal: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalType | null>(null);


export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [title, setTitle] = useState("");
    const [valueModal, setValueModal] = useState(true);

    return (
        <GlobalContext.Provider value={{
            title,
            setTitle,
            valueModal,
            setValueModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}