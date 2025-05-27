import Nav from '../../components/nav/Nav'
import './accueil.css'
import bgHome from '/src/assets/home/background-home-desktop.jpg'
export default function Accueil() {
    return(
        <>
            <div className='bodyAccueil' style={{backgroundImage: `url(${bgHome})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
                
                 <Nav/>
            </div>
           
        </>
    )
}