import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navBar">
      <Link to="/ISRA/Dashboard" className="title">
        <h1>Logo</h1>
      </Link>
      <div onClick={() => setOpen(!open)} className="menu">
        {open ? <p>Close</p> : <p>Open</p>}
      </div>
      <ul className={open ? "open" : "MainClass"}>
        <li className="navLink">
          <NavLink to="/ISRA/Dashboard">Home</NavLink>
        </li>

        <li className="navLink">
          <NavLink to="/ISRA/Contact">Contact</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/ISRA/Profile">Profile</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/ISRA/Test12">Test</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
