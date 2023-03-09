import React from "react";
import "../LandingPage/LandingPage.css";
import firstPageImg from "../../../public/Images/firstPage-AJ.png";

const LandingPage = () => {
  return (
    <div className="firstPage">
      <div className="firstPage-content">
        <div className="firstPage-text">
          {/* <h1 className="firstPage-H1">
            Välkommen till <br /> Hälsinge Fönsterputs!
          </h1>
          <h2 className="firstPage-h2">
            Beställ en <span>gratis offert</span> idag!
          </h2> */}
        </div>
        {/* <img className="firstPage-img" src={firstPageImg} alt="" /> */}
      </div>
      {/* <div className="info-container">
        <div className="info about-bg">Om oss</div>
        <div className="info services-bg">Tjänster</div>
        <div className="info fields-bg">Arbetsområden</div>
      </div> */}
      {/* <div style={{ background: "red", height: 600 }} />
      <div style={{ background: "blue", height: 100 }} /> */}
    </div>
  );
};

export default LandingPage;
