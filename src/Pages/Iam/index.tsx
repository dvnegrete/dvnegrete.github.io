import './styles.css'

export const Iam = () => {
    const tecnologyInit = new Date("2008-01-02");
    const devInit = new Date("2021-04-10");

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

    return (
        <section className='section__Iam'>
            <figure>
                <img className='animate__animated animate__backInUp' 
                    src="https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/dev-me.jpg" alt="" />
            </figure>
            <div className="container__Iam animate__animated animate__backInRight">

                <p>Entusiasta de la tecnología, y desde hace {timeInTechnology()} años estoy involucrado de una manera u otra en ella. Tengo estudios truncos de Licenciatura en Ciencias de la Informática. </p>

                <p><span className='container__Iam--span'>Full Stack Developer</span> con {timeOfDeveloper()} de experiencia en el ecosistema JavaScript/TypeScript. Aplico <span className='container__Iam--span'>Clean Architecture</span> y principios SOLID para escribir código mantenible y bien estructurado, trabajando bajo metodologías Scrum en entornos colaborativos de equipo.</p>

                <p>Comencé desarrollando proyectos personales de práctica (Wikiclone, Calculadoras, Platzi Video, Comparador de Streaming, etc.) en paralelo al sitio web del CECATI 13, proyecto que desarrollé en solitario y donde pude pulir mi habilidad con <span className='container__Iam--span'>JavaScript</span> y construir fundamentos sólidos de HTML y CSS. </p>

                <p>Trabajé en Agile Thought, asignado la mayor parte del tiempo a proyectos en <span className='container__Iam--span'>Citibanamex Empresarial</span>, donde colaboré en equipos de desarrollo de software en roles tanto de Frontend como de Backend. Usamos herramientas de gestión de Atlassian (JIRA, Confluence, Bitbucket) y flujos de trabajo Scrum en todo el ciclo de desarrollo.</p>

                <p>En el Frontend he trabajado con <span className='container__Iam--span'>React, Vue.js y Angular</span>, adaptándome a las necesidades de cada proyecto. Procuro utilizar <span className='container__Iam--span'>TypeScript</span> en todos los proyectos posibles. También uso Astro para sitios orientados a contenidos y StencilJS para Web Components.</p>

                <p>En el Backend, desarrollo con <span className='container__Iam--span'>Node.js</span> usando ExpressJS y <span className='container__Iam--span'>NestJS</span>, aplicando Clean Architecture y Dependency Injection. Manejo bases de datos relacionales (MySQL, PostgreSQL con Prisma) y no relacionales (MongoDB, Firebase). He implementado autenticación con OAuth 2.0 y JWT.</p>

                <p>En Cloud Computing, tengo experiencia práctica con <span className='container__Iam--span'>Google Cloud Platform</span> (Cloud Run, Cloud Functions, Cloud Build), Microsoft Azure (Azure Functions, Blob Storage) y AWS. Implemento CI/CD con GitHub Actions y Cloud Build. Además, he integrado <span className='container__Iam--span'>IA generativa</span> (LLMs, RAG, embeddings) en aplicaciones web.</p>

            </div>
        </section>
    )
}