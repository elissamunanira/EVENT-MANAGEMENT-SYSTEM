import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/event4.jpg" alt="event" />
      <div className="item">
        <h3>Welcome to Event Management system</h3>
        <div>
          <h1>Your deal is our priority to us</h1>
          <p>
            We believe that you will enjoy to the fullest not the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
