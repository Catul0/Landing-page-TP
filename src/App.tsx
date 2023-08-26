
import Features from './components/Features'
import Locations from './components/Locations'
import Marcas from './components/Marcas'
import NavBar from './components/NavBar'
import Numeros from './components/Numeros'
import { Planes } from './components/Planes'
import Portada from './components/Portada'
import Carousel from './components/carrusel'
import { Footer } from './components/Footer'
import Formulario from './components/Formulario'


function App() {
  return(
    <main className=" pt-6 font-sans bg-blue-200 mt-0">
      <NavBar></NavBar>
      <Portada/>
      <Numeros/>
      <Features/>
      <Planes/>
      <Locations/>
      <Marcas/>
      <Carousel />
      <Formulario/>
      <Footer/>
    </main>
    
  )
}

export default App
