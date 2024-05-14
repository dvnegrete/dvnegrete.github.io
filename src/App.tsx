import { HashRouter } from 'react-router-dom'

import { HeaderComponent } from './components'
import { AppRoute } from './router/AppRoute'
import { Footer } from './components/Footer'

function App() {

  return (
    <HashRouter>

      <HeaderComponent />

      <main className='main'>

        <AppRoute />

      </main>

      <Footer />

    </HashRouter>
  )
}

export default App
