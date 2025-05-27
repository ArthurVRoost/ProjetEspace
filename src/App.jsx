
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Accueil from './pages/accueil/Accueil'
import Destination from './pages/destination/Destination'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/' element={<Accueil/>}/>
    </Routes>
      
    </>
  )
}

export default App
