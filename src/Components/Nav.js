import "./Nav.css";
import { Link } from "react-router-dom";

import React from "react";

export const Nav = () => {
  return (
    <div className="nav">
      <nav className="top-navbar">
        <Link to="/">Home</Link>
        <Link to="product">Product</Link>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
};
