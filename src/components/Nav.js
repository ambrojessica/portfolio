import React from "react";
import '../App.css';

const Nav = () => {
  return (
    <nav className="main-nav">
      <h2>Jessica Ambrocio's Portfolio 🌼</h2>
      <ul className="list-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>
    </nav>
  );
};

export default Nav;