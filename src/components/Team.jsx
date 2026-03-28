import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import './Team.css';

const teamData = [
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    imgUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    imgUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'Julian Hayes',
    role: 'Lead UX/UI Designer',
    imgUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sophia Chen',
    role: 'Senior Full Stack Dev',
    imgUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'David Kim',
    role: 'Backend Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    socials: { github: '#', twitter: '#' }
  },
  {
    name: 'Amara Diop',
    role: 'Frontend Developer',
    imgUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'Leo Santiago',
    role: 'DevOps Specialist',
    imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'Rachel Zane',
    role: 'Marketing Director',
    imgUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#' }
  }
];

const Team = () => {
  return (
    <section id="team" className="section-wrapper">
      <div className="container">
        <div className="card-container team-container">
          <div className="portfolio-header">
            <h2 className="card-title">Our Team<span className="period">.</span></h2>
            <p className="portfolio-subtitle">The brilliant minds behind every successful project.</p>
          </div>

          <div className="team-grid">
            {teamData.map((member, index) => (
              <div 
                className="team-card"
                key={index}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="team-img-wrapper">
                      <img src={member.imgUrl} alt={member.name} className="team-img" />
                    </div>
                    <div className="team-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-content">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <div className="social-links">
                        {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>}
                        {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>}
                        {member.socials.github && <a href={member.socials.github} target="_blank" rel="noreferrer"><FaGithub /></a>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
