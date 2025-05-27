import { Link } from 'react-router-dom'
import './nav.css'
import logo from '/src/assets/shared/logo.svg'
export default function Nav() {
    return(
        <>
            <div className='divNav'>
                <div className='navDiv1'>
                    <img className='navImg' src={logo} alt="logo site" />
                </div>
                <div className='navDiv2'>
                    <Link to="/"><p className='navP'>00 HOME</p></Link>
                    
                    <Link to="/destination"> <p className='navP'>01 DESTINATION</p></Link>
                    <Link to="/crew"><p className='navP'>02 CREW</p></Link>
                    <Link to="/technology"><p className='navP'>03 TECHNOLOGY</p></Link>
                   
                    
                    
                </div>
            </div>
        </>
    )
}