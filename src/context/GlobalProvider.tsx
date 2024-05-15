import { ReactNode, useState } from "react";
import { GlobalContext } from "./GlobalContext";

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