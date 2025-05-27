import Nav from '../../components/nav/Nav'
import './accueil.css'
import bgHome from '/src/assets/home/background-home-desktop.jpg'
export default function Accueil() {
    return(
        <>
            <div className='bodyAccueil' style={{backgroundImage: `url(${bgHome})`, width:"100vw", backgroundSize: 'cover', height: "100vh"}}>
                 <Nav/>
                 <div className='divAccueil'>
                    <div className='accueilDiv1'>
                        <h2 className='accueilH21'>SO, YOU WANT TO TRAVEL TO</h2>
                        <h1 className='accueilH1'>SPACE</h1>
                        <p className='accueilP'>Let's face it: if you want to go to spac, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relac becayse we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className='accueilDiv2'>
                        <h2 className='accueilH22'>EXPLORE</h2>
                    </div>
                 </div>
            </div>
           
        </>
    )
}