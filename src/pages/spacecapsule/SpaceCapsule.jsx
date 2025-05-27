import '../technologie/technologie.css'
import bgTech from '/src/assets/technology/background-technology-desktop.jpg'
import launch from '/src/assets/technology/image-launch-vehicle-portrait.jpg'
import spacePort from '/src/assets/technology/image-spaceport-portrait.jpg'
import spaceCapsule from '/src/assets/technology/image-space-capsule-portrait.jpg'
import Nav from '../../components/nav/Nav'
import { Link, NavLink } from 'react-router-dom'

export default function SpaceCapsule() {
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
                    <h1 className='techDiv2H1'>SPACE CAPSULE</h1>
                    <p className='techDiv2P'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained. </p>
                </div>
                <div className='techDiv3'>
                    <img className='techImg' src={spaceCapsule} alt="" />
                </div>
            </div>
         
        </div>
        </>
    )
}