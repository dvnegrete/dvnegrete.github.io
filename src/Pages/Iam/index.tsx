import './styles.css'

export const Iam = ()=> {
    return (
        <section className='section__Iam'>
            <figure>
                <img src="https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/PerfilMobile.jpg" alt=""/>
            </figure>
            <div className="container__Iam">
                <p>Comencé en abril de 2021 a desarrollar proyectos personales de práctica (Wikiclone, Calculadoras, Platzi Video, Comparador de Streaming, etc.) en paralelo al sitio web del CECATI 13, donde desarrollé principalmente mi habilidad con Javascript. El sitio web cecati13.edu.mx lo desarrolle en solitario. La primera parte de este proyecto consistió en mostrar los cursos disponibles, lo cual se hace conectado a una API creada con ExpressJS (NodeJS), y desplegado en APP Engine de GCP. También sirve la información de anuncios, y la galería de imágenes.</p>
                <p>A finales de 2021, comencé a conocer y usar ReactJS, desarrolle el proyecto "Lista de tareas personales" (todoTask).</p>
                <p>En abril de 2022, se dio la oportunidad de trabajar con un equipo de desarrollo más grande, al ser contratado por Agile Thought para un proyecto en Citibanamex Empresarial con el rol de Frontend Developer en el desarrollo de una funcionalidad de su App Mobile. Aquí comencé a usar y conocer las herramientas de gestión de Atlassian (JIRA, Confluence, Bitbucket). Las tecnologías usadas en este proyecto fueron principalmente AngularJS y SCSS.</p>
                <p>A la par, continue con el proyecto secundario en cecati13.edu.mx desarrollado funcionalidades nuevas: un sistema de inscripción y el inicio del sistema de control escolar. Este desarrollo se realizó con VueJS en el Frontend. En el Backend implemente middlewares de autenticación con JWT y la encriptación de los usuarios de control escolar al consultar ciertas API; esta información se guarda en Firebase. Por otra parte, los comprobantes requeridos en la inscripción se digitalizaron, y el estudiante los envía con fotografía desde su celular mediante la aplicación web; los archivos se guardan en el servicio Blob Storage de Azure.</p>
                <p>A finales de 2022 comencé a experimentar con Angular y Typescript, y adentrándome cada vez más al mundo de Cloud Computing, probado despliegues serveless en Azure Functions, AWS Lambda, y Cloud Functions de GCP. También probando despliegues de servidores de NodeJS en Railway y Heroku.</p>
                <p>Por necesidades del proyecto al que se me asigno en abril de 2023, aprendí de forma ágil y urgente a usar y desarrollar en StencilJS, para la creación de Web Components, que se usarían en la creación de un Microfront. Las tecnologías usadas en este proyecto de menos 6 meses fueron Angular, StencilJS, Typescript, Jenkins, JEST y las herramientas de Atlassian. Este fue un proyecto sumamente desafiante, pero del cual aprendí mucho a nivel personal, ya que me permitió poner a prueba mi capacidad de aprendizaje rápido, adaptabilidad, resolución de problemas, trabajo en equipo, y hasta de liderar en algunas circunstancias.</p>
            </div>
        </section>
    )
}