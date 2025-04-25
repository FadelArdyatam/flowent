import "../styles/SolutionSection.css"
import { FaArrowRight } from "react-icons/fa"
import GlowButton from "./GlowButton"

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="section-badge">
        <span>🌐 The Flovent Solution</span>
      </div>

      <div className="solution-sphere">
        <div className="sphere-lines"></div>
        <div className="sphere-content">
          <h2 className="solution-title">
            Unified Data <span className="gradient-text-enhanced">Zero</span>
            <br />
            <span className="gradient-text-enhanced italic">Fragmentation</span>
          </h2>

          <p className="solution-description">
            A single integration point for <strong>real-time market</strong>, <strong>blockchain</strong>, and{" "}
            <strong>social data</strong>.
          </p>

          <div className="marquee-container">
            <div className="marquee">
              <span>
                Real-time data <FaArrowRight className="marquee-icon" /> Blockchain integration{" "}
                <FaArrowRight className="marquee-icon" /> Social intelligence <FaArrowRight className="marquee-icon" />{" "}
                Zero fragmentation <FaArrowRight className="marquee-icon" />
              </span>
              <span>
                Real-time data <FaArrowRight className="marquee-icon" /> Blockchain integration{" "}
                <FaArrowRight className="marquee-icon" /> Social intelligence <FaArrowRight className="marquee-icon" />{" "}
                Zero fragmentation <FaArrowRight className="marquee-icon" />
              </span>
            </div>
          </div>

          <div className="powered-by">
            Powered by <strong className="gradient-text-enhanced">Datawork AI</strong> <span className="tm">™</span>{" "}
            orchestrated autonomy
          </div>

          <div className="solution-button-container">
            <GlowButton text="Learn More" icon={<FaArrowRight />} />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Documentation
            </a>
            <a href="#" className="footer-link">
              API
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
          </div>
          <div className="copyright">© 2023 Flovent. All rights reserved.</div>
        </div>
      </footer>
    </section>
  )
}

export default SolutionSection
