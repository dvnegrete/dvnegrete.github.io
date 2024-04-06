import { useState } from "react"
import { Menu } from "../Menu"
import { Navbar } from "../Navbar"

import './styles.css';

export const HeaderComponent = ()=> {

    const [ valueModal, setValueModal ] = useState(true);

    const toogleModal = ()=>{
        setValueModal(!valueModal);
    }

    return (
        <header>
            <Menu changeModal={ valueModal } toogleModal={toogleModal} />
            <Navbar hidden={ valueModal }/>
        </header>
    )
}