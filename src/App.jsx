
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LIneChart from './components/LineChart/LIneChart'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/DesyNav/DaisyNav'

function App() {
  

  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-3xl text-red-300'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LIneChart></LIneChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
