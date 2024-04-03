
import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Portifolio from './Components/Portifolio'
import Footer from './Components/Footer'

function App() {
  

  return (
   <div>
    <Nav />
    <Home />
    <About  />
    <LandingPage  />
    <Portifolio />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
