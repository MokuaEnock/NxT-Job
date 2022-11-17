import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/">Beta</NavLink>
      <NavLink to="/">Jobs</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
}
