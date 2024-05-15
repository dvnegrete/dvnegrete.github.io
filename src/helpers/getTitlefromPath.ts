export const getTitleFromPath = (path: string) => {
    switch (path) {
        case "/portafolio":
            return "Portafolio";
        case "/sobre-mi":
            return "Sobre Mí";
        case "/skills":
            return "Skills";
        case "/contacto":
            return "Contacto";
        default:
            return "";
    }
};