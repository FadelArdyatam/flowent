import "../styles/PowerUpSection.css";
import { BsLightning } from "react-icons/bs";
import { aeonikRegular, aeonikLight, recklessNeueItalic } from "./Fonts";
import LineGlow from "./LineGlow";
import GradientPill from "./GradientPill";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SiThunderstore } from "react-icons/si";

const PowerUpSection = ({ features }) => {
  return (
    <section className="power-up-section">
      <LineGlow
        logoUrl="/images/flowent.png"
        logoSize={60}
        glowIntensity={10}
        waveColorStart="#001a3d"
        waveColorEnd="#0066ff"
      />

      <div className="gradient-pill-container">
        <GradientPill icon={<SiThunderstore />}>
          Power by Flowent
        </GradientPill>
      </div>

      <div className="section-content-wrapper">
        <h2 className={`section-title ${aeonikLight.className}`}>
          Power Up Your AI Agent in <br />
          <span className={`gradient-text ${recklessNeueItalic.className}`}>One Go</span>
        </h2>

        <p className={`section-description ${aeonikRegular.className}`}>
          Access 30+ premium data sources through one powerful endpoint. From real-time <br />
          markets to social intelligence, unlock the full spectrum of data AI needs.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item animated-item ${aeonikRegular.className}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerUpSection;