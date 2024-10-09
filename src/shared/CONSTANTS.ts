import { ProjectDataInterface } from "./Interfaces";

export const TECNOLOGYS = {
    Astro: {
        name: "Astro",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/astro-icon-light.svg"
    },
    HTML: {
        name: "HTML5",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/html5.svg"
    },
    CSS: {
        name: "CSS3",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/css3-original.svg"
    },
    Bootstrap: {
        name: "Bootstrap",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/bootstrap.svg"
    },
    Tailwind: {
        name: "Tailwind CSS",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/tailwindcss.svg"
    },
    JS: {
        name: "JavaScript",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/javascript-js.svg"
    },
    TS: {
        name: "TypeScript",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/typescript-black.svg"
    },
    React: {
        name: "React",
        url: 'https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/react.svg'
    },
    Angular: {
        name: "Angular",
        url: 'https://angular.io/assets/images/logos/angular/shield-large.svg'
    },
    Vue: {
        name: "VueJS",
        url: 'https://v2.vuejs.org/images/logo.svg'
    },
    Stencil: {
        name: "StencilJS",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/stencil.svg"
    },
    NextJS: {
        name: "NextJS",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/nextjs.svg"
    },
    Node: {
        name: "NodeJS",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/node-js.svg"
    },
    Mongo: {
        name: "MongoDB",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/mongodb-original-wordmark.svg"
    },
    Firebase: {
        name: "Firebase",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/firebase.svg"
    },
    MySql: {
        name: "MySql",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/mysql.svg"
    },
    Azure: {
        name: "Azure",
        url: 'https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/microsoft-azure.svg'
    },
    GCP: {
        name: "Google Cloud Plataform",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/gcp-color.svg"
    },
    AWS: {
        name: "AWS",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/aws.svg"
    },
    ServerRender: {
        name: "Render",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/render.svg"
    },
    git: {
        name: "Git",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/git.svg"
    },
    github: {
        name: "Github",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/github.svg"
    },
    Bitbucket: {
        name: "Bitbucket",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/bitbucket.svg"
    },
    JIRA: {
        name: "JIRA",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/jira.svg"
    },
    Confluence: {
        name: "Confluence",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/confluence.svg"
    },
    JEST: {
        name: "JEST",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/jest.svg"
    },
    Docker: {
        name: "Docker",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/docker.svg"
    },
    Jenkins: {
        name: "Jenkins",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/jenkins.svg"
    },    
}

export const PortfolioData: ProjectDataInterface[] = [
    {
        nameProject: "ProyectoSweb",
        webURL: "https://proyectosweb.com.mx",
        projectURLGithub: "https://github.com/dvnegrete/proyectosweb",
        description: [
            "Servicios de Desarrollo Freelance (septiembre 2024).",
            "Desarrollado en Astro e incorporando Calendly, y un componente de React en el formulario de contacto. Con Astro la accesibilida y el SEO mejoran notablemente. El DarkMode del sitio se controla desde un boton. Con Github Actions se tiene CI/CD al reaizar cambios.",
        ],
        tecnologys: [TECNOLOGYS.Astro, TECNOLOGYS.github, TECNOLOGYS.React, TECNOLOGYS.Tailwind],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/proyectosSweb-dark-mobile2.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/proyectosSweb-light.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/proyectosSweb-dark-mobilepng.png",
            ],
        },
    },
    {
        nameProject: "Sitio web del CECATI 13",
        webURL: "https://cecati13.edu.mx",
        projectURLGithub: "https://github.com/cecati13/cecati13",
        description: [
            "Desarrollado en tres etapas.",
            "Primera Fase (oct 2021 - mar 2022): Diseño del sitio con la UX/UI, accesibilidad, estilo responsive, y buen SEO. El desarrollo fue con Vanilla JavaScript.",
            "Segunda Fase (abr 2022 - feb 2023): Implemente la inscripción a los cursos desde el sitio web y el acceso con login. Desarrollado con VueJS.",
            "Tercera Fase (may 2024 - actual): Añadi autenticacion con OAuth 2.0 con Microsoft Azure. Se añadio con Github Actions un proceso de CI/CD para los despliegues los cambios.",
        ],
        tecnologys: [TECNOLOGYS.JS, TECNOLOGYS.Vue, TECNOLOGYS.CSS, TECNOLOGYS.github],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-moblie.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-desktop.jpg"
            ],
        },
    },
    {
        nameProject: "API del CECATI 13",
        projectURLGithub: "https://github.com/cecati13/apiServerlessSpreadSheet",
        description: [
            "Desarrollado en tres etapas.",
            "Primera Fase (oct 2021 - mar 2022): API con ExpressJS conectada a una SpreedSheet de Google Docs, y desplegada en APP Engine de GCP.",
            "Segunda Fase (abr 2022 - feb 2023): Implementación de middlewares para autenticación usando JWT y encriptación para las contraseñas para usuarios. Conexión a Firebase de para almacenar usuarios. Para la digitalización de los documentos de inscripciones, use Blob Storage de Microsoft Azure, y la inforamción de las inscripciones de almacena en Spreedsheet.",
            "Tercera Fase Fase (may 2024 - actual): Cambio a autenticacion con OAuth 2.0 con Microsoft Azure. Migre infroamción a una Base de datos MySQL y se elimina dependencia de SpreedSheet. El servidor web se migro de App Engine a Cloud Run para bajar costos y ser completamente Serverless. Se implementa CI/CD en Cloud Run y Cloud Build de GCP junto con Github Actions.",
        ],
        tecnologys: [TECNOLOGYS.Node, TECNOLOGYS.Firebase, TECNOLOGYS.GCP, TECNOLOGYS.MySql, TECNOLOGYS.Azure, TECNOLOGYS.github],
        imagePreviousProject: {
            arrayUrl: [],
        },
    },
    {
        nameProject: "Sitio del CECATI 196",
        webURL: "https://cecati196.edu.mx",
        projectURLGithub: "https://github.com/cecati196/front",
        description: [
            "Desarrollo Full Stack (octubre - noviembre 2023)",
            "En el frontend se usó Angular para mostrar información del plantel y mediante un buscador encontrar los cursos disponibles. En el Backend use con ExpressJS (NodeJS) conectado a una hoja de cálculo de Spreedsheet y servido desde una Cloud Function (GCP).",
            "El sitio es responsive, cuida la accesibilidad, y tiene buen SEO para los motores de búsqueda. Trabaje en diseño UX/UI, e implemente el DarkMode de forma automática, dependiendo de la configuración del navegador del usuario",
            "Este desarrollo relativamente más sencillo, cuesta muy pocos recursos económicos al plantel. Busque la mejor forma de reducir los costos tras un análisis calidad-precio usando el Cloud."
        ],
        tecnologys: [TECNOLOGYS.Angular, TECNOLOGYS.GCP, TECNOLOGYS.Node],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/cecati196-mobile.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/cecati196-web.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/cecati196-mobile-dark.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/cecati196-web-dark.png",
            ],
        },
    },
    {
        nameProject: "Proyecto de Web Component: Calendario Doble",
        projectURLGithub: "https://github.com/dvnegrete/calendar-double",
        webURL: "https://dvnegrete.github.io/Portafolio-calendario-doble/",
        description: [
            "Web Component desarrollado con StencilJS. (dic 2023 - ene 2024)",
            "Por necesidades del proyecto con el cliente Citi, de abril a diciembre de 2023, trabaje en una funcionalidad que requería crear un MicroFrontend, y sus respectivos componentes web usando StencilJS. El Microfront se montó sobre una APP creada en Angular.",
            "Este calendario para seleccionar algún periodo de tiempo, fue el componente más complejo que desarrolle durante estos meses. Se uso StencilJS que usa TypeScript para la parte del desarrollo",
            "Se desarrollaron sus Unit Test con JEST, el coverage está al 100%. Permite cambiar tipo de letra y colores para su implementación y esta publicado en NPM para el uso en cualquier proyecto."

        ],
        tecnologys: [TECNOLOGYS.Stencil, TECNOLOGYS.TS, TECNOLOGYS.JEST],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/calendar-double-01.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/calendar-double-02.png"
            ],
        },
    },
    {
        nameProject: "Proyecto Práctica. Administración de Hospitales",
        projectURLGithub: "https://github.com/dvnegrete/angular-adv-adminpro",
        description: [
            "Proyecto Full Stack desarrollado en el de Curso Angular Avanzando de Udemy. (febrero - abril 2023)",
            "El desarrollo se centró en una aplicación que pudiera ayudar en la administración de un Hospital.",
            "Se creo un Backend en ExpressJS conectado a MongoDB (actualmente solo disponible el código)"
        ],
        tecnologys: [TECNOLOGYS.Angular, TECNOLOGYS.TS, TECNOLOGYS.Mongo, TECNOLOGYS.Node],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/angular-adminPro-desktop.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/angular-adminPro.png"
            ],
        },
    },
    {
        nameProject: "Backend API. App Gestión de contenido multimedia",
        projectURLGithub: "https://github.com/dvnegrete/media-dvn-back",
        description: [
            "API de la aplicación desarrollado en NodeJS con ExpressJS. Lógica de negocio a partir de los requerimientos de una prueba técnica. Parte de un Desarrollo Full Stack",
            "Conectado a MongoDB, usando Mongoose, y a Blob Storage de Microsoft Azure."
        ],
        tecnologys: [TECNOLOGYS.Node, TECNOLOGYS.Mongo, TECNOLOGYS.ServerRender],
        imagePreviousProject: {
            arrayUrl: [],
        },
    },
    {
        nameProject: "App Gestión de contenido multimedia. Frontend",
        webURL: "https://dvnegrete.github.io/media-dvn-front/",
        projectURLGithub: "https://github.com/dvnegrete/media-dvn-front",
        description: [
            "Aplicación de Gestión de contenido multimedia (abril 2024)",
            "Basado en requerimientos de una prueba técnica. Desarrollado con React, TypeScript, TailwindCSS, Vite.",
        ],
        tecnologys: [TECNOLOGYS.TS, TECNOLOGYS.React, TECNOLOGYS.Tailwind],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/media-dvn1.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/media-dvn2.png",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/media-dvn3.png",
            ],
        },
    },
    {
        nameProject: "Lista de ToDos",
        webURL: "https://dvnegrete.github.io/todoTask/",
        projectURLGithub: "https://github.com/dvnegrete/todoTask",
        description: [
            "App de Lista de Tareas -ToDos- (octubre y noviembre 2021).",
            "Primer proyecto con React. Diseño responsive y con principios de UX/UI. Guarda información en localStorage y es funcional"
        ],
        tecnologys: [TECNOLOGYS.React, TECNOLOGYS.CSS],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/ToDo+Task-mobile.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/ToDo+Task-mobile2.jpg",
            ],
        },
    },
    {
        nameProject: "WikiClon",
        webURL: "https://dvnegrete.github.io/WikiClone/",
        projectURLGithub: "https://github.com/dvnegrete/WikiClone",
        description: [
            "De los primeros clones de sitios web que cree. Aquí se destaca el uso de CSS y Diseño responsive que he trabajado desde mis primeros proyectos.",
            "Desarrollado entre Abril y Agosto 2021"
        ],
        tecnologys: [TECNOLOGYS.HTML, TECNOLOGYS.CSS],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/wikiclon-mobile.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/wikiclon.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/wikiclon-mobile2.jpg"
            ],
        },
    },
];
