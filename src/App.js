import logo from "./logo.svg";
import "./App.css";
import img1 from "./image/Layer 0 (1).png";
import img2 from "./image/Mask group (1).png";
import img3 from "./image/Layer 1 (1).png";
import img4 from "./image/Group 71929 (1).png";
import img5 from "./image/Layer 1 6 (1).png";
import img6 from "./image/protrucks 1 (1).png";
import img7 from "./image/Layer 1 (1).png";
import img8 from "./image/Group 71929 (1).png";
import img9 from "./image/Layer 1 6 (1).png";
import img10 from "./image/protrucks 1 (1).png";
function App() {
  return (
    <div>
      <div className="staff-paper">
        <div className="local-left">
          <p className="velly">
            Our experts have been working alongside in-house teams for over a
            decade.
          </p>
        </div>
        <div className="local-right">
          <div className="main-lim-box">
            <div className="dove-bb">
              <img src={img1} className="jorry" alt="logo"></img>
              <hr className="dark-line" />
              <img src={img2} className="kick" alt="logo"></img>
            </div>
            <div className="Dment">
              <img src={img7} className="guns"></img>
              <hr className="dark-line" />
              <img src={img8} className="nijia"></img>
            </div>
            <div className="trunks">
              <img src={img9} className="rely"></img>
              <hr className="dark-line" />
              <img src={img10} className="pro"></img>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************** */}
    </div>
  );
}

export default App;
