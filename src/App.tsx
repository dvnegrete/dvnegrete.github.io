import { BrowserRouter } from 'react-router-dom'
import { HeaderComponent } from './components'
import { AppRoute } from './router/AppRoute'

function App() {

  return (
    <BrowserRouter>
      <HeaderComponent />
      <main>
        <AppRoute />
      </main>
    </BrowserRouter>
  )
}

export default App
