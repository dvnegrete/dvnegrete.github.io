const skillHTML5 = {
    nameSkill: "HTML5",
    imageSkill : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/html5.png"
};
const skillCSS3 = {
    nameSkill: "CSS3",
    imageSkill : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/css3.png"
};
const skillAWS = {
    nameSkill: "S3 de Amazon Web Services",
    imageSkill : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/aws-logo.png"
};
const skillBootstrap = {
    nameSkill: "Bootstrap",
    imageSkill : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/boostrap.png"
};
const skillJS = {
    nameSkill: "JavaScript",
    imageSkill : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/javascript.png"
};


let briefcase = [
    {
      name : "googleClon",
      repository: "https://dvnegrete.github.io/clonGoogle/",
      title : "Clon de la Página de inicio de Google",
      skills : [skillHTML5, skillCSS3],
      previous : {
          mobile : "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/googleClon-mobile.jpg",
          desktop,
          other1
      },
      state: "completado",
      date: new Date([2021, 05, 15])
    },

    {
        name :"wikiclon",
        repository : "https://dvnegrete.github.io/WikiClone/",
        title : "Clon de la página de Wikipedia",
        skills: [skillHTML5, skillCSS3, skillAWS],
        previous : {
            mobile :"https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/wikiclon-mobile.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/wikiclon.jpg",
            other1
        },
        state: "Completado",
        date: new Date([2021, 06, 15])
    },
    {
        name: "platziVideo",
        repository : "https://dvnegrete.github.io/platzi_video/",
        title : "El comienzo de una aplicación web de videos",
        skills : [skillHTML5, skillCSS3],
        previous : {
            mobile: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platziVideo.-mobile.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platziVideo.jpg",
            other1: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/platzi-video-iniciarSesion.jpg"
        },       
        state: "Incompleto. Solo Maquetación. Pendiente continuación del desarrollo",
        date: new Date([2021, 07, 15])
    },
    {
        name: "calculatorsJS",
        repository : "https://dvnegrete.github.io/cursoPracticoJS/",
        title : "Calculadoras con JavaScript",
        skills : [skillHTML5, skillCSS3, skillJS],
        previous : {
            mobile: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/calculadoras-tablet.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/calculadoras.jpg",
            other1: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/calculadoras-tablet2.jpg"            
        },       
        state: "Completado",
        date: new Date([2021, 08, 15])
    },
    {
        name: "apiAgucates",
        repository : "https://dvnegrete.github.io/APIAguacates/",
        title : "Consulta a API para generar información de Aguacates",
        skills : [skillJS, skillBootstrap],
        previous : {
            mobile: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/apiAguacates-mobile.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/apiAguacates-desktop.jpg",
            other1
        },       
        state: "Completado",
        date: new Date([2021, 09, 01])
    },
    {
        name: "comparativeStreaming",
        repository : "https://dvnegrete.github.io/StreamingComparative/",
        title : "Comparador de costos en las distintas plataformas Streaming",
        skills : [skillHTML5, skillCSS3, skillJS],
        previous : {
            mobile: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/comparadorStreaming2.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/comparadorStreaming.jpg",
            other1
        },       
        state: "Completado (En Busqueda de APIS Publicas para conseguir info real sobre el contenido actual de las plataformas)",
        date: new Date([2021, 09, 15])
    },
    {
        name: "cecati13",
        repository : "https://dvnegrete.github.io/cecati13/",
        title : "Rediseño del Sitio oficial del CECATI 13",
        skills : [skillHTML5, skillCSS3, skillJS],
        previous : {
            mobile: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-moblie.jpg",
            desktop: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/proyectos/cecati13-desktop.jpg",
            other1
        },       
        state: "En Desarrollo...",
        date: new Date([2021, 09, 15])
    }
]
