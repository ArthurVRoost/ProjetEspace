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
                    <p className='navP'>00 HOME</p>
                    <p className='navP'>01 DESTINATION</p>
                    <p className='navP'>02 CREW</p>
                    <p className='navP'>03 TECHNOLOGY</p>
                </div>
            </div>
        </>
    )
}