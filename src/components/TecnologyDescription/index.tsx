import { TecnologyObjInterface, TecnologyPropInterface } from '../../shared/Interfaces';
import './styles.css'

export const TecnologyDescription = ( { tecnologys }: TecnologyPropInterface)=> {
    return (
        <>
        { tecnologys.map( (tecnology:TecnologyObjInterface) =>(
            <figure className='tec-figure'>
                <img
                    className="tecnology" 
                    src={ tecnology.url } 
                    alt={ tecnology.name }/>
                <figcaption>{ tecnology.name }</figcaption>
            </figure>
        ))}
        </>
    )
}