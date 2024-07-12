import React from 'react';
import GymImg from "./images/gymlogo.png";

const Projects = () => {
    return (
        <article id="projects">
            <h2>Projects</h2>
            <div>
                <figure>
                    <a href="https://soulful0.github.io/Gym-Website/" target="_blank" rel="noopener noreferrer">
                        <img src={GymImg} alt="Gym Website Screenshot" />
                    </a>
                    <figcaption>Gym Website</figcaption>
                </figure>
                <p>
                    A responsive gym website showcasing various fitness services. 
                    This project was made with the purpose of creating a gym website 
                    for users to sign up for a membership and look up exercises and 
                    trainers.
                </p>
                <div>
                    <strong>Deployed Application:</strong> <a href="https://soulful0.github.io/Gym-Website/" target="_blank" rel="noopener noreferrer">View Project</a>
                    <br />
                    <strong>GitHub Repository:</strong> <a href="https://github.com/soulful0/Gym-Website" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
            </div>
        </article>
    );
};

export default Projects;