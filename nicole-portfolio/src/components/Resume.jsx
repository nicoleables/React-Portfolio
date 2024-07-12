import React from "react";
import MyResume from "./images/Resume (1).pdf";

function Resume() {
  return (
    <section className="my-resume">
      <h2>Resume</h2>
      <a href={MyResume} download>
      View my resume
      </a>
    </section>
  );
}

export default Resume;