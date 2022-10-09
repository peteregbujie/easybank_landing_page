import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { navLinks } from "../../constants";
import Button from "../Button";
import "./navbar.css";

const Navbar = () => {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick((prevClick) => !prevClick);

 return (
  <div className="header">
   <nav className="nav__container">
    <img src={logo} alt="logo" />
    <ul className={click ? "nav__menu active" : "nav__menu"}>
     {navLinks.map((nav) => (
      <li key={nav.id}>
       <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
     ))}
    </ul>
    <Button text="Request Invite" />

    <div className="hamburger" onClick={handleClick}>
     {click ? (
      <FaTimes size={20} style={{ color: "#333" }} />
     ) : (
      <FaBars size={20} style={{ color: "#333" }} />
     )}
    </div>
   </nav>
  </div>
 );
};

export default Navbar;
