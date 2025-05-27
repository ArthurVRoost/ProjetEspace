
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Accueil from './pages/accueil/Accueil'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
    </Routes>
      
    </>
  )
}

export default App
