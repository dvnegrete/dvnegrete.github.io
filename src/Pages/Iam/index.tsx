import './styles.css'

export const Iam = () => {
    const tecnologyInit = new Date("2008-01-02");
    const devInit = new Date("2021-04-10");
    const typescriptInit = new Date("2022-05-01")

    const calcTime = (timeInit: Date) => {
        const today = new Date();
        const yearsExperience = today.getFullYear() - timeInit.getFullYear();
        const monthExperience = today.getMonth() - timeInit.getMonth();
        let years = yearsExperience;
        let month: number | null = monthExperience;
        let areThereMonths: string | null = "meses";
        if (month < 0) {
            years--;
            month += 12
        }
        if (month === 1) {
            areThereMonths = "mes"
        }
        if (month === 0) {
            month = null;
            areThereMonths = null;
        }
        return {
            years,
            month,
            areThereMonths,
        }
    }

    const timeOfDeveloper = () => {
        const { years, month, areThereMonths } = calcTime(devInit);
        return <span>{years} años {month} {areThereMonths}</span>;
    }

    const timeInTechnology = () => {
        const { years } = calcTime(tecnologyInit);
        return <span>{years}</span>;
    }

    const timeWithTs = () => {
        const { years } = calcTime(typescriptInit);
        return <span>{years}</span>;
    }

    return (
        <section className='section__Iam'>
            <figure>
                <img className='animate__animated animate__backInUp' 
                    src="https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/dev-me.jpg" alt="" />
            </figure>
            <div className="container__Iam animate__animated animate__backInRight">

                <p>Entusiasta de la tecnología, y desde hace {timeInTechnology()} años estoy involucrado de una manera u otra en ella. Tengo estudios truncos de Licenciatura en Ciencias de la Informática. </p>

                <p>Actualmente tengo <span className='container__Iam--span'> {timeOfDeveloper()} de experiencia como developer</span>. Considero tener un nivel Semi-Senior; soy meticuloso y dedicado, también autodidacta y no necesito supervisión, puedo trabajar y entregar lo que se requiere, aunque eso me pueda tomar un poco más de tiempo. </p>

                <p>Comencé desarrollando proyectos personales de práctica (Wikiclone, Calculadoras, Platzi Video, Comparador de Streaming, etc.) en paralelo al sitio web del CECATI 13, proyecto que desarrollé en solitario y donde pude pulir mi habilidad con <span className='container__Iam--span'>JavaScript</span> y tener fundamentos sólidos de HTML y CSS. </p>

                <p>Trabaje en Agile Thought, asignado la mayor parte del tiempo a proyectos en Citibanamex Empresarial, donde colabore en equipos de desarrollo de software, principalmente como <span className='container__Iam--span'>Frontend </span>. Aquí usamos herramientas de gestión de Atlassian (JIRA, Confluence, Bitbucket), las cuales ahora están dentro de mis skills técnicos. </p>

                <p>En la parte Frontend he tocado varios Frameworks o librerías, de acuerdo a las necesidades del proyecto, y aunque no tengo un favorito me inclino un poco más por React. Y desde hace {timeWithTs()} años que comencé a usar <span className='container__Iam--span'>TypeScript</span>, trato de implementarlo en todos los proyectos posibles.</p>

                <p>En la parte del Backend, uso NodeJS, principalmente con ExpressJS y más recientemente NextJS; y prefiero usar bases de datos no relacionales como MongoDB o Firebase, sin embargo, también conozco lo necesario de SQL. </p>

                <p>En lo que respecta a Cloud Computing, tengo los conocimientos necesarios para usar los servicios Saas o Paas que se ofrecen en muchos de los proveedores de este servicio. He trabajado Google Cloud Plataform, Microsoft Azure, Amazon Web Service, Heroku, Railway y Render. </p>

                <p>Como me gusta pensar y trabajar en soluciones, siempre estoy dispuesto a escuchar distintas alternativas y procuro ver como implementar esas alternativas. </p>

            </div>
        </section>
    )
}