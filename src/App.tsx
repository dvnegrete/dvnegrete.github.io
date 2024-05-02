import { HashRouter } from 'react-router-dom'
import { HeaderComponent } from './components'
import { AppRoute } from './router/AppRoute'

function App() {

  return (
    <HashRouter>
      <HeaderComponent />
      <main>
        <AppRoute />
      </main>
    </HashRouter>
  )
}

export default App
