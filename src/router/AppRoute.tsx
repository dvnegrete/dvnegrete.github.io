import { useRoutes } from "react-router-dom"
import { Contact, Home, Iam, Portfolio, Skills } from "../Pages";
import { CalendarDVN } from "../Pages/Portfolio/CalendarDVN";

export const AppRoute = () => {
    const router = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/*", element: <Home /> },
        { path: "/portafolio", element: <Portfolio/> },
        { path: "/sobre-mi", element: <Iam /> },
        { path: "/skills", element: <Skills /> },
        { path: "/contacto", element: <Contact/> },
        { path: "/portafolio/calendar", element: <CalendarDVN/> },
    ])

    return router;
}