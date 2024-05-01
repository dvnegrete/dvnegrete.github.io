import { useRoutes } from "react-router-dom"
import { Contact, Home, Iam, Portfolio, Skills } from "../Pages";

export const AppRoute = () => {
    const router = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/*", element: <Home /> },
        { path: "/portafolio", element: <Portfolio/> },
        { path: "/sobre-mi", element: <Iam /> },
        { path: "/skills", element: <Skills /> },
        { path: "/contacto", element: <Contact/> },
    ])

    return router;
}