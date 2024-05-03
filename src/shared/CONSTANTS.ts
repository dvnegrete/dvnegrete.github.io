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
}

export const PortfolioData: ProjectDataInterface[] = [
    {
        nameProject: "WikiClon",
        webURL: "https://dvnegrete.github.io/WikiClone/",
        projectURLGithub: "https://github.com/dvnegrete/WikiClone",
        description: "De los primeros clones de sitios web que cree. Aqui se destaca el uso de CSS.",
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
        description: "Construido en 2 etapas",
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
        description: "Fronted en Angular. Backend desarrollado con ExpressJS (NodeJS) y montando en una Cloud Function (GCP), tras un analisis de calidad-precio del servicio Cloud",
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
        webURL: "/portafolio/calendar",
        description: "Web Component desarrollado con StencilJS. Pruebas unitarias con JEST y coverage al 100%. Este proyecto fue uno de los componentes que genere internamente para uno de mis clientes en su aplicación web.",
        tecnologys: [TECNOLOGYS.Stencil, TECNOLOGYS.TS],
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
        description: "API de la aplicación desarrollado en NodeJS con ExpressJS. Lógica de negocio a partir de los requerimientos de una prueba técnica. Desarrollo Full Stack como parte de la prueba técnica",
        tecnologys: [TECNOLOGYS.Node, TECNOLOGYS.Mongo, TECNOLOGYS.ServerRender],
        imagePreviousProject: {
            arrayUrl: [],
        },
    },
    {
        nameProject: "App Gestión de contenido multimedia. Frontend",
        webURL: "https://dvnegrete.github.io/media-dvn-front/",
        projectURLGithub: "https://github.com/dvnegrete/media-dvn-front",
        description: "Aplicación de Gestion de contenido multimedia. Basado en requerimientos de una prueba técnica. Desarrollado con React + TypeScript y TailwindCSS",
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
        description: "App de Lista de Tareas (ToDos) desarrollada en React. Diseño responsive y con principios de UX/UI.",
        tecnologys: [TECNOLOGYS.React, TECNOLOGYS.CSS],
        imagePreviousProject: {
            arrayUrl: [
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/ToDo+Task-mobile.jpg",
                "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/ToDo+Task-mobile2.jpg",
            ],
        },
    },
];
