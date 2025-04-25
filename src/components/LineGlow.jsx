import React from 'react';
import styles from '../styles/LineGlow.css';

export const LineGlow = ({ 
  width = '100%', 
  height = 'auto',
  logoUrl = '/logo.svg',
  logoSize = 50,
  glowIntensity = 8,
  waveColorStart = '#000119',
  waveColorEnd = '#00057F',
}) => {
  return (
    <div className={styles.lineGlowContainer}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 1073 212" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        className={styles.lineGlow}
      >
        {/* Wave Paths with glow */}
        <path 
          d="M259.656 1.38635C259.656 1.38635 261.612 55.4773 275.189 86.3581C289.119 118.044 302.662 134.366 329.096 156.711C357.248 180.508 377.929 188.787 413.154 199.654C458.629 213.683 534.672 208.791 534.672 208.791C534.672 208.791 603.501 211.3 645.227 199.654C682.891 189.142 705.517 181.594 735.681 156.711C762.55 134.547 777.451 118.652 790.502 86.3581C803.021 55.3774 800.552 1.38635 800.552 1.38635" 
          stroke="url(#paint0_linear)" 
          strokeWidth="4"
          className={styles.wavePath}
        />
        
        <path 
          d="M2 0.472656C2 0.472656 5.86449 54.5864 32.6864 85.4802C60.2075 117.179 86.9628 133.509 139.186 155.863C194.804 179.67 235.664 187.952 305.254 198.824C395.096 212.859 545.33 207.964 545.33 207.964C545.33 207.964 681.309 210.475 763.745 198.824C838.155 188.307 882.855 180.756 942.449 155.863C995.531 133.689 1024.97 117.787 1050.75 85.4802C1075.49 54.4864 1070.61 0.472656 1070.61 0.472656" 
          stroke="url(#paint1_linear)" 
          strokeWidth="4"
          className={styles.wavePath}
        />
        
        
        {/* Center Logo - Positioned below the wave */}
        <g transform={`translate(530, 180)`}>
          <circle 
            cx="0" 
            cy="0" 
            r={logoSize/2} 
            fill="white" 
            filter="url(#logoGlow)"
          />
          <image 
            x={-logoSize/2} 
            y={-logoSize/2} 
            width={logoSize} 
            height={logoSize} 
            xlinkHref={logoUrl} 
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        
        <defs>
          
          <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={glowIntensity} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Gradients */}
          <linearGradient id="paint0_linear" x1="530.203" y1="209.617" x2="530" y2="118.473" gradientUnits="userSpaceOnUse">
            <stop offset="0.0476549" stopColor={waveColorStart}/>
            <stop offset="1" stopColor={waveColorEnd}/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="536" y1="208.473" x2="536" y2="108.973" gradientUnits="userSpaceOnUse">
            <stop stopColor={waveColorStart}/>
            <stop offset="0.997362" stopColor={waveColorEnd}/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LineGlow;