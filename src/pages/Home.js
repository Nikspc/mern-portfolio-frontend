import React, { useEffect, useState } from "react";
import { getProfile } from "../api/profile";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  // Import Navbar
import "./Home.css";

const Home = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            const data = await getProfile();
            setProfile(data);
        }
        fetchProfile();
    }, []);

    return (
        <>
            <Navbar />
            <div className="home-container">
                {profile ? (
                    <>
                        <motion.div 
                            className="hero-section"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>{profile.name}</h1>
                            <h3 className="role">{profile.role}</h3>
                            <p className="description">{profile.description}</p>
                        </motion.div>

                        <motion.div 
                            className="skills-section"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4>Tech Stack</h4>
                            <div className="skills">
                                {profile.skills.map((skill, index) => (
                                    <motion.span 
                                        key={index} 
                                        className="skill-badge"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="social-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <a href={profile.github} className="btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={profile.linkedin} className="btn linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </motion.div>
                    </>
                ) : (
                    <p className="loading-text">Loading...</p>
                )}
            </div>
        </>
    );
};

export default Home;
