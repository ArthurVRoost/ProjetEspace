import './technologie.css'
import bgTech from '/src/assets/technology/background-technology-desktop.jpg'
import launch from '/src/assets/technology/image-launch-vehicle-portrait.jpg'
import spacePort from '/src/assets/technology/image-spaceport-portrait.jpg'
import spaceCapsule from '/src/assets/technology/image-space-capsule-portrait.jpg'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'

export default function Technologie() {
    return(
        <>
        <div className='bodyTech' style={{backgroundImage: `url(${bgTech})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
            <Nav/>
            <div className='destiDiv1'>
                <h1 className='destiDiv1H1'><span className='destiDiv1Span'>03</span> SPACE LAUNCHE 101</h1>
            </div>
            <div className='divTech'>   
                <div className='techDiv1'>
                    <p className='techDiv1P'>1</p>
                    <p className='techDiv1P'>2</p>
                    <p className='techDiv1P'>3</p>
                </div>
                <div className='techDiv2'>
                    <h2 className='techDiv2H2'>THE TERMINOLOGY...</h2>
                    <h1 className='techDiv2H1'>LAUNCH VEHICLE</h1>
                    <p className='techDiv2P'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div className='techDiv3'>
                    <img className='techImg' src={launch} alt="" />
                </div>
            </div>
         
        </div>
        </>
    )
}