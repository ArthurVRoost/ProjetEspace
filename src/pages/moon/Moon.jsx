import Nav from '../../components/nav/Nav'
import '../destination/destination.css'
import bgDesti from '/src/assets/destination/background-destination-desktop.jpg'
import moon from '/src/assets/destination/image-moon.png'
import mars from '/src/assets/destination/image-mars.png'
import titan from '/src/assets/destination/image-titan.png'
import europa from '/src/assets/destination/image-europa.png'
import { NavLink } from 'react-router-dom'

export default function Moon() {
    return(
        <>
        <div className='bodyDestination' style={{backgroundImage: `url(${bgDesti})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
            <Nav/>
            <div className='destiDiv1'>
                 <h1 className='destiDiv1H1'><span className='destiDiv1Span'>01</span> PICK YOUR DESTINATION</h1>
            </div>
            <div className='divDesti'>
                <div className='destiDiv2'>
                    <img className='destiImg' src={moon} alt="image lune" />
                </div>
                <div className='destiDiv3'>
                    <div className='destiDiv3Div1'>
                        <NavLink 
                            to="/destination" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                            end
                        >
                            <p className='destiDiv3Div1P'>MOON</p>
                        </NavLink>
                        
                        <NavLink 
                            to="/destination/mars" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            <p className='destiDiv3Div1P'>MARS</p>
                        </NavLink>
                        
                        <NavLink 
                            to="/destination/europa" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            <p className='destiDiv3Div1P'>EUROPA</p>
                        </NavLink>
                        
                        <NavLink 
                            to="/destination/titan" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            <p className='destiDiv3Div1P'>TITAN</p>
                        </NavLink>
                    </div>
                    <div className='destiDiv3Div2'>
                        <h1 className='destiDiv3Div2H1'>MOON</h1>
                        <p className='destiDiv3Div2P'>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites</p>
                    </div>
                    <div className='destiDiv3Div3'>
                        <h2 className='destiDiv3Div3H2'>EST. TRAVEL TIME</h2>
                        <h1 className='destiDiv3Div3H1'>3 DAYS</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}