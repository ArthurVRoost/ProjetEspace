import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import logo from '/src/assets/shared/logo.svg'
import burgerIcon from '/src/assets/shared/icon-hamburger.svg'
import closeIcon from '/src/assets/shared/icon-close.svg'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='divNav'>
            <div className='navDiv1'>
                <Link className="link" to="/"><img className='navImg' src={logo} alt="logo site" /></Link>
            </div>

            
           <button className="burgerBtn" onClick={toggleMenu}>
                <img
                    src={menuOpen ? closeIcon : burgerIcon}
                    alt={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    className="burgerIcon"
                />
                </button>

            <nav className={`navDiv2 ${menuOpen ? 'open' : ''}`}>
                <NavLink 
                    className={({ isActive }) => isActive ? 'link active' : 'link'} 
                    to="/" onClick={() => setMenuOpen(false)}
                >
                    <p className='navP'>00 HOME</p>
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'link active' : 'link'} 
                    to="/destination" onClick={() => setMenuOpen(false)}
                >
                    <p className='navP'>01 DESTINATION</p>
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'link active' : 'link'} 
                    to="/crew" onClick={() => setMenuOpen(false)}
                >
                    <p className='navP'>02 CREW</p>
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'link active' : 'link'} 
                    to="/technology" onClick={() => setMenuOpen(false)}
                >
                    <p className='navP'>03 TECHNOLOGY</p>
                </NavLink>
            </nav>
        </div>
    )
}