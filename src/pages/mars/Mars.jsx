import Nav from '../../components/nav/Nav'

import bgDesti from '/src/assets/destination/background-destination-desktop.jpg'
import moon from '/src/assets/destination/image-moon.png'
import mars from '/src/assets/destination/image-mars.png'
import titan from '/src/assets/destination/image-titan.png'
import europa from '/src/assets/destination/image-europa.png'
import { Link } from 'react-router-dom'

export default function Mars() {
    return(
        <>
        <div className='bodyDestination' style={{backgroundImage: `url(${bgDesti})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
            <Nav/>
            <div className='destiDiv1'>
                <h1 className='destiDiv1H1'><span className='destiDiv1Span'>01</span> PICK YOUR DESTINATION</h1>
            </div>
            <div className='divDesti'>
                <div className='destiDiv2'>
                    <img className='destiImg' src={mars} alt="image lune" />
                </div>
                <div className='destiDiv3'>
                    <div className='destiDiv3Div1'>
                        <Link to="/destination" className='link'><p className='destiDiv3Div1P'>MOON</p></Link>
                        <Link to="/destination/mars" className='link'><p className='destiDiv3Div1P'>MARS</p></Link>
                        <Link to="/destination/europa" className='link'><p className='destiDiv3Div1P'>EUROPA</p></Link>
                        <Link to="/destination/titan" className='link'><p className='destiDiv3Div1P'>TITAN</p></Link>
                    </div>
                    <div className='destiDiv3Div2'>
                        <h1 className='destiDiv3Div2H1'>MARS</h1>
                        <p className='destiDiv3Div2P'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. It’s two and a half times 
                            the size of Everest!
                        </p>
                    </div>
                    <div className='destiDiv3Div3'>
                        <h2 className='destiDiv3Div3H2'>EST. TRAVEL TIME</h2>
                        <h1 className='destiDiv3Div3H1'>9 months</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}