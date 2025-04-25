"use client";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoBar from "./components/LogoBar";
import PowerUpSection from "./components/PowerUpSection";
import ProblemSection from "./components/ProblemSection";
import { featuresData, problemsData } from "./data";
import { useRef, useEffect } from "react";
import Footer from "./components/Footer";


function App() {
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
    <div className="app">
      <div className="gradient-background">
        {/* Base Layers */}
        <div className="animated-gradient"></div>
        <div className="grid-overlay"></div>

        {/* Blob Elements */}
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        {/* Mist Blob */}
        <div className="mist-blob" ref={mistRef}></div>

        {/* Content */}
        <div className="container">
          <Header />
          <HeroSection />
          <LogoBar />
          <PowerUpSection features={featuresData} />
          <ProblemSection problems={problemsData} />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;