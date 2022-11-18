import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="navbar">
      <NavLink to="/seeker">seeker</NavLink>
      <NavLink to="/recruiter">Jobs</NavLink>
    </aside>
  );
}
