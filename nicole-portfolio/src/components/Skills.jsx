import React from "react";

function Skills() {
  return (
    <section className="my-skills">
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="frontend-section">
            <h3>Front-end</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>JSX</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="backend-section">
            <h3>Back-End</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL Databases</li>
              <li>NoSQL Databases</li>
              <li>MVC</li>
              <li>ORM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills