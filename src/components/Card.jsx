import React, { useRef, useEffect } from "react";
import "../styles/Card.css";
import { aeonikRegular } from "./Fonts";

const PreciseCard = ({ title, description, imageUrl }) => {
  const blobRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const card = cardRef.current;
    if (!blob || !card) return;

    const handlePointerMove = (event) => {
      const cardRect = card.getBoundingClientRect();
      const relativeX = event.clientX - cardRect.left;
      const relativeY = event.clientY - cardRect.top;
      
      // Animate blob position relative to card
      blob.style.left = `${relativeX}px`;
      blob.style.top = `${relativeY}px`;
    };

    card.addEventListener("mousemove", handlePointerMove);
    
    return () => {
      card.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return (
    <div className="precise-card-container" ref={cardRef}>
      {/* Blob effect element - now positioned relative to card */}
      <div className="card-blob" ref={blobRef}></div>
      <div className="card-blur-overlay"></div>
      
      {/* Image section */}
      <div className="card-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="card-image" loading="lazy" />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      
      {/* Content section */}
      <div className="card-content">
        <h3 className={`card-title ${aeonikRegular.className}`}>{title}</h3>
        <p className={`card-description ${aeonikRegular.className}`}>{description}</p>
      </div>
    </div>
  );
};

export default PreciseCard;