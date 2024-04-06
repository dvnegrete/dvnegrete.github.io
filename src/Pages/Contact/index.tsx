import './styles.css'

export const Contact = ()=> {
    return (
        <section className="contact_form">
            <div className="form">
                <h4>Deja un mensaje para contactarme</h4>
                <form action="" method="post">
                    <p>
                    <label htmlFor="name">Nombre
                        <span className="required">*</span>
                    </label>
                    <input type="text" name="name" required placeholder="Escribe tu nombre"/>
                    </p>
                    
                    <p>
                    <label htmlFor="email">Email
                        <span className="required">*</span>
                    </label>
                    <input type="email" name="email" required placeholder="Escribe tu Email"/>
                    </p>
                    
                    <p>
                    <label htmlFor="telefone">Teléfono
                    </label>
                    <input type="tel" name="telefone" placeholder="Escribe tu teléfono"/>
                    </p>
                    
                    <p>
                    <label htmlFor="business">Asunto
                        <span className="required">*</span>
                    </label>
                    <input type="text" name="business" required placeholder="Escribe un asunto"/>
                    </p>    
                
                    <p>
                    <label htmlFor="message">Mensaje
                        <span className="required">*</span>
                    </label>
                    <textarea name="message" className="texto_mensaje"required placeholder="Deja aquí tu comentario..."></textarea> 
                    </p>                    
                
                    <button type="submit" name="sendForm" id="buttonForm" data-node="noDisponible">
                    Enviar
                    </button>
            
                    <p className="warning">
                    <span className="required"> * </span>los campos son obligatorios.
                    </p>          
                    
                </form>
            </div>
        </section>
    )
}