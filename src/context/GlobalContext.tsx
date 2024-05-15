import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type GlobalType = {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalType | null>(null);


export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [title, setTitle] = useState("");

    return (
        <GlobalContext.Provider value={{
            title,
            setTitle
        }}>
            {children}
        </GlobalContext.Provider>
    )
}