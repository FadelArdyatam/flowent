"use client";

import "../styles/Footer.css";
import GlowButton from "./GlowButton";
import { FaCoins } from "react-icons/fa";
import { aeonikLight, aeonikRegular, recklessNeueItalic } from "./Fonts";
import GradientPill from "./GradientPill";
import { SiThunderstore } from "react-icons/si";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`footer-section ${aeonikRegular.className}`}>
      <div className="gif-background">
        <img 
          src={isMobile ? "/images/sphere-mobile.gif" : "/images/sphere.gif"}
          alt="Animated sphere background"
          className="sphere-gif"
          loading="lazy" 
        />
      </div>

      <div className="footer-content">
        <div className="container">
        <div className={`gradient-pill-container`}>
          <GradientPill icon={<SiThunderstore />}>
            The Flowent Solution
          </GradientPill>
        </div>

        <div className={`footer-title ${aeonikLight.className}`}>
          Unified Data <span className={`gradient-text-footer ${recklessNeueItalic.className}`}>Zero</span> <br />
          <span className={`gradient-text-footer ${recklessNeueItalic.className}`}>
            Fragmentation
          </span>
        </div>

        <p className={`footer-subtitle ${aeonikRegular.className}`}>
          A single integration point for real-time market, blockchain, and social data.
          <br />
          Powered by <span className={`text-highlight ${recklessNeueItalic.className}`}>Deepseek R1</span> for unmatched scalability.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Footer;