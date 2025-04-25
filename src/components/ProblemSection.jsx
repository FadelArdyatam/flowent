import { SiThunderstore } from "react-icons/si"
import "../styles/ProblemSection.css"
import GradientPill from "./GradientPill"
import { aeonikLight, recklessNeueItalic } from "./Fonts"
import PreciseCard from "./Card"

const ProblemSection = ({ problems }) => {
  return (
    <section className="problem-section">
      <div className="the-problem">
        <GradientPill icon={<SiThunderstore />}>
          The Problem
        </GradientPill>
      </div>

      <h2 className={`section-title ${aeonikLight.className}`}>
        AI Agents are Stuck in <br />
        <span className={`gradient-text ${recklessNeueItalic.className}`}> Data Silios</span>
      </h2>

      <div className={`problems-grid`}>
        <PreciseCard
          title="Blockchain Integration"
          description="Secure and decentralized data sources with transparent verification processes."
          imageUrl="/images/card/1.png"
        />

        <PreciseCard
          title="Blockchain Integration"
          description="Secure and decentralized data sources with transparent verification processes."
          imageUrl="/images/card/2.png"
        />

        <PreciseCard
          title="Blockchain Integration"
          description="Secure and decentralized data sources with transparent verification processes."
          imageUrl="/images/card/3.png"
        />
      </div>

    </section>
  )
}

export default ProblemSection
