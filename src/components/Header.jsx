import "../styles/Header.css"
import GlowButton from "./GlowButton"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="/images/flowent.png" alt="logo" />
        </div>
        <span className="logo-text">FLOWENT</span>
      </div>
      <GlowButton text="Get Started" icon={<span className="arrow">→</span>} />
    </header>
  )
}

export default Header
