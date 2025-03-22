import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <>
            <Navbar />
            <motion.div 
                className="projects-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on.</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} className="btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.liveDemo} className="btn demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
