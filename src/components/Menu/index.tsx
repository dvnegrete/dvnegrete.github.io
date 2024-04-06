import './styles.css';

interface MenuProps {
    changeModal: boolean;
    toogleModal: ()=> void;
}

export const Menu = ({ changeModal, toogleModal }: MenuProps )=> {

    const menuShow = () => (
        <svg className="menu" viewBox="0 0 46 34.5" stroke-linecap="round" stroke-width="6px">
            <line x1="3" y1="17.25" x2="43" y2="17.25"/>
            <line x1="3" y1="31.5" x2="43" y2="31.5"/>
            <line x1="3" y1="3" x2="43" y2="3"/>
        </svg>
    );
    
    const menuClose = () => {return (
        <svg className="menu" viewBox="0 0 31.71 36.64" stroke-linecap="round" stroke-width="6px">
            <line x1="3" y1="33.64" x2="28.71" y2="3"/>
            <line x1="28.71" y1="33.64" x2="3" y2="3"/>
        </svg>
    )};
    
    return ( 
        <div className='container__menu' onClick={ toogleModal}>
            { changeModal ? menuShow() : menuClose() }
        </div>
    )
}