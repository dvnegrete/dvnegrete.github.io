import './styles.css'

export const Home = () => {
    return (
        <section className="sectionHome">
            <div className="intro">
                <h1 className='animate__animated animate__bounceInLeft'>Damián Valenzuela Negrete</h1>
                <img
                    className="sectionHome__intro__img animate__animated animate__bounceIn"
                    src="https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/webDvnegrete.png"
                    alt="Engranes"
                />
                <h2 className='animate__animated animate__bounceInRight'>Frontend / Full Stack / Web Developer</h2>
            </div>
            <div className="social__media animate__animated animate__animated animate__bounceIn">
                <a href="https://github.com/dvnegrete">
                    <img src="https://logodix.com/logo/64439.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/dvnegrete/">
                    <img src="https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/linkend-logo.png" alt="linkedin" />
                </a>
            </div>
        </section>
    )
}