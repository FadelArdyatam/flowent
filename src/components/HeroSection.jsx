"use client";

import "../styles/HeroSection.css";
import GlowButton from "./GlowButton";
import { FaCoins } from "react-icons/fa";
import { 
  aeonikLight, 
  aeonikRegular, 
  recklessNeueItalic 
} from "./Fonts"; 
import { useRef, useEffect } from "react";
import GradientPill from "./GradientPill";
import { SiThunderstore } from "react-icons/si";



const HeroSection = () => {
  const mistRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.height;
      if (mistRef.current) {
        mistRef.current.style.transform = `translate(${x * 40 - 20}px, ${y * 20 - 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={`hero-section ${aeonikRegular.className}`}>

    <div className="mist-blob" ref={mistRef}></div>
    <div className={`gradient-pill-container`}>
        <GradientPill icon={<SiThunderstore/>}>
        Flowent DeepseekR1 
        </GradientPill>
      </div>

      <div className={`hero-title ${aeonikLight.className}`}>
        Unlock AI's Full Potential With <br/>
        <span className={`gradient-text-hero ${recklessNeueItalic.className}`}>Unified Data Streams</span>
      </div>

      <p className={`hero-subtitle ${aeonikRegular.className}`}>
        Solve data fragmentation, slash costs, and supercharge AI agents with
        <br />
        <span className={`text-small ${recklessNeueItalic.className}`}>Flowent's DeepSeek R1</span> powered platform.
      </p>

      <div className="hero-button-container">
        <GlowButton text="Buy $FLWT" icon={<FaCoins className="coin-icon" />} />
      </div>
    </section>
  );
};

export default HeroSection;