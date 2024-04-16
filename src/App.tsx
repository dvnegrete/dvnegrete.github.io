import { HeaderComponent } from './components'
import { Contact, Home, Iam, Portfolio, Skills } from './Pages'

function App() {

  return (
    <>
      <HeaderComponent/>
      <main>
        <Home/>
        <Portfolio/>
        <Iam/>
        <Skills/>
        <Contact/>
      </main>
    </>
  )
}

export default App
