import React from "react";
import "./LandingPage.css";
import video from "../../assets/dark-opacity.mp4";
import goldLine from "../../../public/Images/gold-bar.png";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <video className="bg-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="lp-text-container">
        <h1>
          Välkommen till <br />
          <span>Hälsinge Fönsterputs!</span>
        </h1>
        <img className="gold-line" src={goldLine} alt="" />
        <h3 className="lp-h3">
          Vi ger dina fönster en riktig <span>"Wow"</span> faktor!
        </h3>
      </div>
    </div>
  );
};

export default LandingPage;
