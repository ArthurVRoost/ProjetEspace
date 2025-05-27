
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Accueil from './pages/accueil/Accueil'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/' element={<Accueil/>}/>
    </Routes>
      
    </>
  )
}

export default App
