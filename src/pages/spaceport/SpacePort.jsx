import '../technologie/technologie.css'
import bgTech from '/src/assets/technology/background-technology-desktop.jpg'
import launch from '/src/assets/technology/image-launch-vehicle-portrait.jpg'
import spacePort from '/src/assets/technology/image-spaceport-portrait.jpg'
import spaceCapsule from '/src/assets/technology/image-space-capsule-portrait.jpg'
import Nav from '../../components/nav/Nav'
import { Link, NavLink } from 'react-router-dom'

export default function SpacePort() {
    return(
        <>
        <div className='bodyTech' style={{backgroundImage: `url(${bgTech})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
            <Nav/>
            <div className='destiDiv1'>
                <h1 className='destiDiv1H1'><span className='destiDiv1Span'>03</span> SPACE LAUNCHE 101</h1>
            </div>
            <div className='divTech'>   
                <div className='techDiv1'>
                    <NavLink 
                        to="/technology" 
                        className={({ isActive }) => isActive ? 'link active' : 'link'}
                        end
                    >
                        <p className='techDiv1P'>1</p>
                    </NavLink>
                    
                    <NavLink 
                        to="/technology/spaceport" 
                        className={({ isActive }) => isActive ? 'link active' : 'link'}
                    >
                        <p className='techDiv1P'>2</p>
                    </NavLink>
                    
                    <NavLink 
                        to="/technology/spacecapsule" 
                        className={({ isActive }) => isActive ? 'link active' : 'link'}
                    >
                        <p className='techDiv1P'>3</p>
                    </NavLink>
                </div>
                <div className='techDiv2'>
                    <h2 className='techDiv2H2'>THE TERMINOLOGY...</h2>
                    <h1 className='techDiv2H1'>SPACEPORT</h1>
                    <p className='techDiv2P'> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</p>
                </div>
                <div className='techDiv3'>
                    <img className='techImg' src={spacePort} alt="" />
                </div>
            </div>
         
        </div>
        </>
    )
}