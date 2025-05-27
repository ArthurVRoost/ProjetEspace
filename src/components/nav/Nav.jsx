import { NavLink } from 'react-router-dom'
import './nav.css'
import logo from '/src/assets/shared/logo.svg'

export default function Nav() {
    return(
        <>
            <div className='divNav'>
                <div className='navDiv1'>
                    <img className='navImg' src={logo} alt="logo site" />
                </div>
                <nav className='navDiv2'>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'link active' : 'link'} 
                        to="/"
                    >
                        <p className='navP'>00 HOME</p>
                    </NavLink>
                    
                    <NavLink 
                        className={({ isActive }) => isActive ? 'link active' : 'link'} 
                        to="/destination"
                    >
                        <p className='navP'>01 DESTINATION</p>
                    </NavLink>
                    
                    <NavLink 
                        className={({ isActive }) => isActive ? 'link active' : 'link'} 
                        to="/crew"
                    >
                        <p className='navP'>02 CREW</p>
                    </NavLink>
                    
                    <NavLink 
                        className={({ isActive }) => isActive ? 'link active' : 'link'} 
                        to="/technology"
                    >
                        <p className='navP'>03 TECHNOLOGY</p>
                    </NavLink>
                </nav>
            </div>
        </>
    )
}