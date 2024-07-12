import React from "react";
import "../index.css";

function Header() {
  return (
    <header className="header-class">
      <h1>Hello, I'm Nicole Ables</h1>
      <p>I'm a full-stack web developer</p>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;