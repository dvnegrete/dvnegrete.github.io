import { HeaderComponent } from './components/Header'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { Iam } from './Pages/Iam'
import { Portfolio } from './Pages/Portfolio/Portfolio'
import { Skills } from './Pages/Skills'

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main>
         {/* <Home/> */}
        {/*<Portfolio/>*/}
        <Iam/>
        <Skills/>
        <Contact/> 
      </main>
    </>
  )
}

export default App
