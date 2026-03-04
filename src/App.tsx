import EstadoSuscripcion from "./components/EstadoSuscripcion/EstadoSuscripcion"
import './App.css'
import InfoBasica from './components/Props/Props';
import ContadorSkills from "./components/ContadorSkills/ContadorSkills";



function App() {

  return (
    <>
      
   <h1 className='bg-blue-500 text-white p-4'>Perfil Profesional</h1>
 <InfoBasica nombre="Bouchra Boukhriss" especialidad="Desarrolladora Frontend🤪" añosExperiencia={5} />
      <EstadoSuscripcion />
      <ContadorSkills />
    </>
    
  )
}

export default App
