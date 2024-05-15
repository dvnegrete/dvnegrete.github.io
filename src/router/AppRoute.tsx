import { useLocation, useRoutes } from "react-router-dom"
import { Contact, Home, Iam, Portfolio, Skills } from "../Pages";
import { useContext, useEffect } from "react";
import { getTitleFromPath } from "../helpers/getTitlefromPath";
import { GlobalContext } from "../context/GlobalContext";

export const AppRoute = () => {

    const context = useContext(GlobalContext);
    const location = useLocation();

    useEffect(() => {
        const newTitle = getTitleFromPath(location.pathname);
        context?.setTitle(newTitle);
    }, [location]);


    const router = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/*", element: <Home /> },
        { path: "/portafolio", element: <Portfolio /> },
        { path: "/sobre-mi", element: <Iam /> },
        { path: "/skills", element: <Skills /> },
        { path: "/contacto", element: <Contact /> },
    ])

    return router;
}