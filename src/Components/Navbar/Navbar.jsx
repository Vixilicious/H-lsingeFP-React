import React from "react";
import logo from "../../../public/Images/HF-logo-white.png";
import logoRes from "../../../public/Images/Icon-transparent.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logoRes">
        <img className="logoRes" src={logoRes} alt="" />
      </div>
      <nav className="navbar">
        <div className="nav-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="h3-container">
          <div className="nav-kt">
            <Link style={{ textDecoration: "none" }} to={"/tjanster"}>
              <h3 className="nav-h3">Tjänster</h3>
            </Link>
          </div>
          <div className="nav-kt">
            <Link style={{ textDecoration: "none" }} to={"/kontakt"}>
              <h3 className="nav-h3">Kontakta oss</h3>
            </Link>
          </div>
          <div className="nav-gold">
            <Link style={{ textDecoration: "none" }} to={"/kontakt"}>
              <h3 className="nav-h3">Boka här</h3>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
