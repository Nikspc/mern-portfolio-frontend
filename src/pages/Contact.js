import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 sec
    };

    return (
        <>
            <Navbar />
            <motion.div 
                className="contact-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Contact Me</h1>
                <p>Feel free to reach out for collaboration or any queries.</p>

                <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Send Message</button>
                </motion.form>

                {submitted && <motion.p className="success-message" animate={{ opacity: 1, y: 0 }}>Message Sent Successfully!</motion.p>}

                <div className="social-links">
                    <a href="https://github.com/yourprofile" className="btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourprofile" className="btn linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </motion.div>
        </>
    );
};

export default Contact;
