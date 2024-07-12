import React from "react";
import MyImg from "./images/IMG.jpg";

function About() {
  return (
    <section className="about-me">
      <div className="content">
        <h2>About Me</h2>
        <p className="about-text">
        Hi there! I’m Nicole Ables, a passionate full-stack developer based in Goldthwaite, 
        Texas. I recently completed an edX bootcamp through The University of Austin Texas, 
        which I gained knowledge and critical skills needed to build dynamic web 
        applications and deploy them.
        I am proficient in many skills including JavaScript (React, Node.js), HTML, CSS, and Git.
        I am also Familiar with database management using SQL and MongoDB. I adapt 
        swiftly to new programming languages, frameworks, and tools During the bootcamp, 
        I collaborated on group projects, and have experance working well within teams.I’m 
        passionate about building dynamic web applications that solve real-world problems.
        Whether it’s front-end design or back-end functionality, I’m committed to creating 
        user-friendly experiences.
        </p>
      </div>
        <img src={ MyImg } className="resized-image"/>
    </section>
  );
}

export default About;