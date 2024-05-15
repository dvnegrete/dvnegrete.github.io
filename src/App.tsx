import { HashRouter } from 'react-router-dom'

import { HeaderComponent } from './components'
import { AppRoute } from './router/AppRoute'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'

function App() {
  const context = useContext(GlobalContext);

  return (
    <HashRouter>

      <HeaderComponent />

      <main className='main'>

        <h2 className='page'>{context?.title}</h2>
        <AppRoute />

      </main>

      <Footer />

    </HashRouter>
  )
}

export default App