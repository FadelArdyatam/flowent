import React, { useRef, useEffect } from "react";
import "../styles/Card.css";
import { aeonikRegular } from "./Fonts";

const PreciseCard = ({ title, description, imageUrl }) => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    };

    window.addEventListener("pointermove", handlePointerMove);
    
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="precise-card-container">
      {/* Blob effect element */}
      <div className="card-blob" ref={blobRef}></div>
      <div className="card-blur-overlay"></div>
      
      {/* Image section */}
      <div className="card-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="card-image" />
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