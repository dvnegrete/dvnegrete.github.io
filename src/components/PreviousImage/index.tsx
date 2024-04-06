import { ImageURLInterface } from '../../shared/Interfaces'
import './styles.css'

export const PreviousImage = ({arrayUrl, name}: ImageURLInterface)=> {
    return (
        
        <figure className='image__previous'>
        { arrayUrl.map( url => (
                <img
                    className='image__previous--img'
                    src={ url }
                    alt={ name }
                    />
                ))}
        </figure>
    )
}