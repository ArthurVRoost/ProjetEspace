import './crew.css'
import douglas from '/src/assets/crew/image-douglas-hurley.png'
import mark from '/src/assets/crew/image-mark-shuttleworth.png'
import anou from '/src/assets/crew/image-anousheh-ansari.png'
import victor from '/src/assets/crew/image-victor-glover.png'
import bgCrew from '/src/assets/crew/background-crew-desktop.jpg'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'

export default function Crew() {
    return(
        <>
            <div className='bodyCrew' style={{backgroundImage: `url(${bgCrew})`, width:"100vw", backgroundSize: 'cover', height: "100vh", backgroundPositionY:"-80px"}} >
                <Nav/>
                <div className='destiDiv1'>
                    <h1 className='destiDiv1H1'><span className='destiDiv1Span'>02</span> MEET YOUR CREW</h1>
                </div>
                <div className='divCrew'>
                    <div className='crewDiv1'>
                        <h2 className='crewDiv1H2'>COMMANDER</h2>
                        <h1 className='crewDiv1H1'>DOUGLAS HURLEY</h1>
                        <p className='crewDiv1P'>Douglas Gerald Hurley is an American engineer, former Marine Corps Pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                        <div className='divPoint'>
                            <Link className='link'><span className='point'>.</span></Link>
                            <Link className='link'><span className='point'>.</span></Link>
                            <Link className='link'><span className='point'>.</span></Link>
                            <Link className='link'><span className='point'>.</span></Link> 
                        </div>
                        
                    </div>
                    <div className='crewDiv2'>
                        <img className='crewImg' src={douglas} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}