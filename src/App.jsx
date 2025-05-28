
import { Link, Outlet, Route, Routes } from 'react-router-dom'
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
import Mark from './pages/mark/Mark'
import Anou from './pages/anou/Anou'
import Victor from './pages/victor/Victor'
import Moon from './pages/moon/Moon'
import Douglas from './pages/douglas/Douglas'
import Launch from './pages/launch/Launch.Jsx'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil/>}/>

      <Route path='/destination' element={<Destination/>}>
        <Route index element={<Moon/>}/>
        <Route path='mars' element={<Mars/>}/>
        <Route path='europa' element={<Europa/>}/>
        <Route path='titan' element={<Titan/>}/>
        <Route path='moon' element={<Moon/>}/>
      </Route>

      <Route path='/crew' element={<Crew/>}>
        <Route index element={<Douglas/>}/>
        <Route path='mark' element={<Mark/>}/>
        <Route path='anou' element={<Anou/>}/>
        <Route path='victor' element={<Victor/>}/>
        <Route path='douglas' element={<Douglas/>}/>
      </Route>

      <Route path='/technology' element={<Technologie/>}>
        <Route index element={<Launch/>}/>
        <Route path='spaceport' element={<SpacePort/>}/>
        <Route path='spacecapsule' element={<SpaceCapsule/>}/>
        <Route path='launch' element={<Launch/>}/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
