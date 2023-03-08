import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="app-Navbar underline-offset-1 py-6 relative sm:px-10  text-white overflow-hidden flex flex-row justify-center rounded-t-3xl align-middle">
      <Link to="/">Rahmou ChatGPT</Link>
    </div>
  );
};

export default Navbar;
