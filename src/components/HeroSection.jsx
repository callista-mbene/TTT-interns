import React from 'react';
import './HeroSection.css';
import profileImg from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-heading">Hi, I am Callista, <br />Software Developer</h1>
        <p className="hero-subtext">
          I’m passionate about building meaningful digital experiences through code, design, and a bit of math magic.<br /> Let’s bring ideas to life!
        </p>
        <a href="/resume.pdf" download className="hero-button">
          Download Resume
        </a>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Callista" className="profile-img" />
      </div>
    </section>
  );
};

export default HeroSection;
