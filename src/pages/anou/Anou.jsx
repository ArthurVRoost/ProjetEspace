import "../crew/crew.css";
import douglas from "/src/assets/crew/image-douglas-hurley.png";
import mark from "/src/assets/crew/image-mark-shuttleworth.png";
import anou from "/src/assets/crew/image-anousheh-ansari.png";
import victor from "/src/assets/crew/image-victor-glover.png";
import bgCrew from "/src/assets/crew/background-crew-desktop.jpg";
import { Link, NavLink } from "react-router-dom";
import Nav from "../../components/nav/Nav";

export default function Anou() {
  return (
    <>
      <div
        className="bodyCrew"
        style={{
          backgroundImage: `url(${bgCrew})`,
          width: "100vw",
          backgroundSize: "cover",
          height: "100vh",
          backgroundPositionY: "-80px",
        }}
      >
        <Nav />
        <div className="destiDiv1">
          <h1 className="destiDiv1H1">
            <span className="destiDiv1Span">02</span> MEET YOUR CREW
          </h1>
        </div>
        <div className="divCrew">
          <div className="crewDiv1">
            <h2 className="crewDiv1H2">FLIGHT ENGINEER</h2>
            <h1 className="crewDiv1H1">Anousheh Ansari</h1>
            <p className="crewDiv1P">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
            <div className="divPoint">
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                end
              >
                <span className="point">●</span>
              </NavLink>

              <NavLink
                to="/crew/mark"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <span className="point">●</span>
              </NavLink>

              <NavLink
                to="/crew/anou"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <span className="point">●</span>
              </NavLink>

              <NavLink
                to="/crew/victor"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <span className="point">●</span>
              </NavLink>
            </div>
          </div>
          <div className="crewDiv2">
            <img className="crewImg" src={anou} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
