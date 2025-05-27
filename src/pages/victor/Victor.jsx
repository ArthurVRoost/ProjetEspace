import '../crew/crew.css'
import douglas from '/src/assets/crew/image-douglas-hurley.png'
import mark from '/src/assets/crew/image-mark-shuttleworth.png'
import anou from '/src/assets/crew/image-anousheh-ansari.png'
import victor from '/src/assets/crew/image-victor-glover.png'
import bgCrew from '/src/assets/crew/background-crew-desktop.jpg'
import { Link, NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'

export default function Victor() {
    return(
        <>
            <div className='bodyCrew' style={{backgroundImage: `url(${bgCrew})`, width:"100vw", backgroundSize: 'cover', height: "100vh", backgroundPositionY:"-80px"}} >
                <Nav/>
                <div className='destiDiv1'>
                    <h1 className='destiDiv1H1'><span className='destiDiv1Span'>02</span> MEET YOUR CREW</h1>
                </div>
                <div className='divCrew'>
                    <div className='crewDiv1'>
                        <h2 className='crewDiv1H2'>PILOT</h2>
                        <h1 className='crewDiv1H1'>VICTOR GLOVER</h1>
                        <p className='crewDiv1P'>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.</p>
                        <div className='divPoint'>
                            <NavLink 
                                to="/crew" 
                                className={({ isActive }) => isActive ? 'link active' : 'link'}
                                end
                            >
                                <span className='point'>●</span>
                            </NavLink>
                            
                            <NavLink 
                                to="/crew/mark" 
                                className={({ isActive }) => isActive ? 'link active' : 'link'}
                            >
                                <span className='point'>●</span>
                            </NavLink>
                            
                            <NavLink 
                                to="/crew/anou" 
                                className={({ isActive }) => isActive ? 'link active' : 'link'}
                            >
                                <span className='point'>●</span>
                            </NavLink>
                            
                            <NavLink 
                                to="/crew/victor" 
                                className={({ isActive }) => isActive ? 'link active' : 'link'}
                            >
                                <span className='point'>●</span>
                            </NavLink>
                        </div>
                        
                    </div>
                    <div className='crewDiv2'>
                        <img className='crewImg' src={victor} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}