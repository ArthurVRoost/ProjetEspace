
import douglas from '/src/assets/crew/image-douglas-hurley.png'
import mark from '/src/assets/crew/image-mark-shuttleworth.png'
import anou from '/src/assets/crew/image-anousheh-ansari.png'
import victor from '/src/assets/crew/image-victor-glover.png'
import bgCrew from '/src/assets/crew/background-crew-desktop.jpg'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'

export default function Mark() {
    return(
        <>
            <div className='bodyCrew' style={{backgroundImage: `url(${bgCrew})`, width:"100vw", backgroundSize: 'cover', height: "100vh", backgroundPositionY:"-80px"}} >
                <Nav/>
                <div className='destiDiv1'>
                    <h1 className='destiDiv1H1'><span className='destiDiv1Span'>02</span> MEET YOUR CREW</h1>
                </div>
                <div className='divCrew'>
                    <div className='crewDiv1'>
                        <h2 className='crewDiv1H2'>MISSION SPECIALIST</h2>
                        <h1 className='crewDiv1H1'>Mark Shuttleworth</h1>
                        <p className='crewDiv1P'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</p>
                        <div className='divPoint'>
                            <Link to="/crew" className='link'><span className='point'>.</span></Link>
                            <Link to="/crew/mark" className='link'><span className='point'>.</span></Link>
                            <Link to="/crew/anou" className='link'><span className='point'>.</span></Link>
                            <Link to="/crew/victor" className='link'><span className='point'>.</span></Link> 
                        </div>
                        
                    </div>
                    <div className='crewDiv2'>
                        <img className='crewImg' src={mark} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}