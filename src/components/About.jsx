import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="portfolio-header">
            <h2 className="card-title">About<span className="period">.</span></h2>
            <p className="portfolio-subtitle">The mind behind the work.</p>
          </div>

          <div className="about-grid">
            <motion.div 
              className="about-image-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="badge">Founder & Developer</div>
              <h3 className="about-name">Freelancer</h3>
              <p className="about-meta">Based worldwide</p>
            </motion.div>
            
            <motion.div 
              className="about-content"
            >
              <h3>One mind, clear vision.</h3>
              <p>I am the sole mind behind this portfolio. No big team, no unnecessary meetings, no wasted hours. As a developer with innovative thinking, I work efficiently with quality and fast.</p>
              <p>I manage and execute everything myself to deliver the best result. I am the best partner you'll find when it comes to excellence.</p>
              
              <div className="about-stats">
                <motion.div 
                  className="stat-box"
                  whileHover={{ y: -5, color: '#00f0ff' }}
                >
                  <h4>100%</h4>
                  <span>Satisfied Clients</span>
                </motion.div>
                <motion.div 
                  className="stat-box"
                  whileHover={{ y: -5, color: '#8a2be2' }}
                >
                  <h4>2020</h4>
                  <span>Year Founded</span>
                </motion.div>
              </div>
              
              <div className="about-tags">
                {['WEB DEVELOPMENT', 'UI/UX DESIGN', 'AUTOMATION'].map((tag, i) => (
                  <motion.span 
                    key={i} 
                    className="tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >{tag}</motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
