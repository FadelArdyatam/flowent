"use client"
import "../styles/GlowButton.css"
import { aeonikRegular } from "./Fonts"


const GlowButton = ({ text, icon, onClick, className }) => {
  return (
    <button className={`glow-button ${className || ""} `} onClick={onClick}>
      <div className="glow-button-inner">
        <span className={` glow-button-text ${aeonikRegular.className} `}>{text}</span>
        {icon && <span className="glow-button-icon">{icon}</span>}
      </div>
    </button>
  )
}

export default GlowButton
