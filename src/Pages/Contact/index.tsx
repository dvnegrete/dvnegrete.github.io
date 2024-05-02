import { useRef } from 'react';
import './styles.css'

export const Contact = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const businessRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const sendData = () => {
        const obj = {
            name: nameRef.current ? nameRef.current.value : null,
            email: emailRef.current ? emailRef.current.value : null,
            phone: phoneRef.current ? phoneRef.current.value : null,
            business: businessRef.current ? businessRef.current.value : null,
            message: messageRef.current ? messageRef.current.value : null,
        }
        //Conectar y enviar al backend
        console.log(obj);
    }

    return (
        <section className="contact_form">
            <div className="form">
                <h4>Deja un mensaje para contactarme</h4>
                <form action="" method="post">
                    <p>
                        <label htmlFor="name">
                            Nombre
                            <span className="required">*</span>
                        </label>
                        <input type="text" name="name" required placeholder="Escribe tu nombre" ref={nameRef} />
                    </p>

                    <p>
                        <label htmlFor="email">
                            Email
                            <span className="required">*</span>
                        </label>
                        <input type="email" name="email" required placeholder="Escribe tu Email" ref={emailRef} />
                    </p>

                    <p>
                        <label htmlFor="telefone">
                            Teléfono
                        </label>
                        <input type="tel" name="telefone" placeholder="Escribe tu teléfono" ref={phoneRef} />
                    </p>

                    <p>
                        <label htmlFor="business">
                            Asunto
                            <span className="required">*</span>
                        </label>
                        <input type="text" name="business" required placeholder="Escribe un asunto" ref={businessRef} />
                    </p>

                    <p>
                        <label htmlFor="message">
                            Mensaje
                            <span className="required">*</span>
                        </label>
                        <textarea name="message" className="texto_mensaje"
                            required placeholder="Deja aquí tu comentario..."
                            ref={messageRef} />
                    </p>

                    <button type="button" name="sendForm" onClick={sendData}>
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