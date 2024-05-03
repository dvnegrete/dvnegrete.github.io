import { ProjectDataInterface } from "./Interfaces";

export const TECNOLOGYS = {
    HTML: {
        name: "HTML5",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/html5.png"
    },
    CSS: {
        name: "CSS3",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/css3.png"
    },
    AWS: {
        name: "S3 de Amazon Web Services",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/aws-logo.png"
    },
    Bootstrap: {
        name: "Bootstrap",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/boostrap.png"
    },
    JS: {
        name: "JavaScript",
        url: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/javascript.png"
    },
    TS: {
        name: "TypeScript",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
    },
    React: {
        name: "React",
        url: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
    },
    Angular: {
        name: "Angular",
        url: 'https://angular.io/assets/images/logos/angular/shield-large.svg'
    },
    Vue: {
        name: "VueJS",
        url: 'https://v2.vuejs.org/images/logo.svg'
    },
    Azure: {
        name: "Azure",
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'
    },
    GCP: {
        name: "Google Cloud Plataform",
        url: "https://logodownload.org/wp-content/uploads/2021/06/google-cloud-logo-5.png"
    },
    Node: {
        name: "NodeJS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
    },
    Stencil: {
        name: "StencilJS",
        url: "https://seeklogo.com/images/S/stencil-logo-2361B95AA4-seeklogo.com.png"
    },
    Mongo: {
        name: "MongoDB",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
    },
    Firebase: {
        name: "Firebase",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
    },
    ServerRender: {
        name: "Render",
        url: "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/89884/render-status-4b015255-e0cc-422c-943d-4f60b5f03094.png"
    },
    Tailwind: {
        name: "Tailwind CSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
    },
    JEST: {
        name: "JEST",
        url: "https://icon.icepanel.io/Technology/svg/Jest.svg"
    },
}

export const PortfolioData: ProjectDataInterface[] = [
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
    {
        nameProject: "Sitio del CECATI 13",
        webURL: "https://cecati13.edu.mx",
        projectURLGithub: "https://github.com/cecati13/cecati13",
        description: [
            "Desarrollado en dos etapas.",
            "Primera Fase (oct 2021 - mar 2022): Se mostraban los cursos disponibles. Cree una API con ExpressJS (NodeJS) conectada a una SpreedSheet de Google Docs, por temas de costos y recursos, y se desplegada en APP Engine de GCP. Trabaje en el diseño del sitio, la parte UX/UI, cuidando la accesibilidad, su diseño responsive, y con buen SEO. El desarrollo se hizo con Vanilla JavaScript.",
            "Segunda Fase (abr 2021 - feb 2023): Implemente la inscripción a los cursos través del sitio web y acceso al personal de control escolar. Este parte del desarrollo en el frontend la realice con VueJS. En el Backend implemente middlewares para autenticación usando JWT y encriptación para las contraseñas de los usuarios de control escolar. Conectado a Firebase. Como parte de la digitalización de este sistema de inscripciones, use Blob Storage de Microsoft Azure para guardar los comprobantes digitales generados en este proceso.",
        ],
        tecnologys: [TECNOLOGYS.Vue, TECNOLOGYS.Firebase, TECNOLOGYS.Node, TECNOLOGYS.GCP, TECNOLOGYS.Azure],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-moblie.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-desktop.jpg"
            ],
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
        nameProject: "Proyecto de Web Component: Calendario Doble ",
        projectURLGithub: "https://github.com/dvnegrete/calendar-double",
        webURL: "https://www.npmjs.com/package/dvn-calendar-double",
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
];
