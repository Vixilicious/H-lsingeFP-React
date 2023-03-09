import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/HF-Logo.png";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navItems">
        <Link
          className="navH3-container"
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={"/kontakt"}
        >
          <h3 className="navH3">Boka här</h3>
        </Link>
        <img className="logo" src={logo} alt="" />
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={"/kontakt"}
        >
          <h3 className="navH3">Kontakta oss</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
