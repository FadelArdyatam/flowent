import "../styles/LogoBar.css";

const LogoBar = () => {
  const logoItems = [
    { id: 1, image: "/images/chart-icon.png", alt: "Chart" },
    { id: 2, image: "/images/x-icon.png", alt: "X" },
    { id: 3, image: "/images/g-icon.png", alt: "G" },
    { id: 4, image: "/images/eagle-icon.png", alt: "Eagle" },
    { id: 5, image: "/images/chart-icon.png", alt: "Chart" },
    { id: 6, image: "/images/x-icon.png", alt: "X" },
    { id: 7, image: "/images/g-icon.png", alt: "G" },
    { id: 8, image: "/images/eagle-icon.png", alt: "Eagle" },
  ];

  return (
    <div className="logo-bar-container">
      <div className="logo-bar-marquee">
        <div className="logo-bar">
          {[...logoItems, ...logoItems].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-item">
              <img 
                src={logo.image} 
                alt={logo.alt} 
                className="logo-image" 
                loading="lazy" // Lazy load images
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/placeholder.svg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;