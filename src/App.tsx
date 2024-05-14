import { useEffect, useState } from 'react'
import { HashRouter, useLocation } from 'react-router-dom'

import { HeaderComponent } from './components'
import { AppRoute } from './router/AppRoute'
import { Footer } from './components/Footer'

function App() {

  const [title, setTitle] = useState("");
  // const location = useLocation();

  // // Función para obtener el título según la ruta
  // const getTitleFromPath = (path:string) => {
  //   switch (path) {      
  //     case "/portafolio":
  //       return "Portafolio";
  //     case "/sobre-mi":
  //       return "Sobre Mí";
  //     case "/skills":
  //       return "Habilidades";
  //     case "/contacto":
  //       return "Contacto";
  //     default:
  //       return "";
  //   }
  // };

  // useEffect(() => {
  //   const path = location.pathname;
  //   const newTitle = getTitleFromPath(path);
  //   setTitle(newTitle);
  // }, [location.pathname]);

  return (
    <HashRouter>

      <HeaderComponent />

      <main className='main'>

        <h3 className='page'>{title}</h3>
        <AppRoute />

      </main>

      <Footer />

    </HashRouter>
  )
}

export default App
