
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Accueil from './pages/accueil/Accueil'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technologie from './pages/technologie/Technologie'
import Mars from './pages/mars/Mars'
import Europa from './pages/europa/Europa'
import Titan from './pages/titan/Titan'
import SpacePort from './pages/spaceport/SpacePort'
import SpaceCapsule from './pages/spacecapsule/SpaceCapsule'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technologie/>}/>
      <Route path='/technology/spaceport' element={<SpacePort/>}/>
      <Route path='/technology/spacecapsule' element={<SpaceCapsule/>}/>
      <Route path='/destination/mars' element={<Mars/>}/>
      <Route path='/destination/europa' element={<Europa/>}/>
      <Route path='/destination/titan' element={<Titan/>}/>
    </Routes>
      
    </>
  )
}

export default App
