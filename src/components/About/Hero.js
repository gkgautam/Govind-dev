import React from "react";
import "./Hero.css";
import heroImage from "../../Assets/hero.jpeg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
