import { useContext } from "react"
import { Menu } from "../Menu"
import { Navbar } from "../Navbar"

import './styles.css';
import { GlobalContext } from "../../context/GlobalContext";

export const HeaderComponent = () => {

    const context = useContext(GlobalContext);

    const valueModal = context?.valueModal !== undefined ? context?.valueModal : true;

    const toogleModal = () => {
        context?.setValueModal(!context.valueModal);
    }

    return (
        <header>
            <Menu changeModal={valueModal} toogleModal={toogleModal} />
            <Navbar hidden={valueModal} />
        </header>
    )
}