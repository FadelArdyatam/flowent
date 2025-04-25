import { FaTwitter, FaChartLine, FaNewspaper } from "react-icons/fa"
import { SiDiscord, SiHiveBlockchain } from "react-icons/si"
import { BsChatDots, BsGraphUp } from "react-icons/bs"
import { IoAnalyticsOutline } from "react-icons/io5"
import { MdOutlineAutoGraph } from "react-icons/md"
import { MdDashboardCustomize } from "react-icons/md"
import { Menu, MenuSquare } from "lucide-react"

// Logo bar data
export const logos = [
  { icon: <FaTwitter /> },
  { icon: <SiDiscord /> },
  { icon: <BsChatDots /> },
  { icon: <IoAnalyticsOutline /> },
  { icon: <MdOutlineAutoGraph /> },
  { icon: <BsGraphUp /> },
  { icon: <FaTwitter /> },
  { icon: <MenuSquare /> },
]

// Features data for PowerUpSection
export const featuresData = [
  { icon: <FaChartLine />, text: "Real-time market flows" },
  { icon: <IoAnalyticsOutline />, text: "Social sentiment analysis" },
  { icon: <SiHiveBlockchain />, text: "On-chain transaction intelligence" },
  { icon: <FaNewspaper />, text: "Breaking news & analysis" },
  { icon: <MenuSquare />, text: "And many other" },
]

// Problems data for ProblemSection
export const problemsData = [
  {
    title: "Fragmented Sources",
    description: "Data scattered across APIs, blockchains, and social platforms.",
    visual: (
      <div className="problem-visual-content">
        <div className="visual-item item-1"></div>
        <div className="visual-item item-2"></div>
        <div className="visual-item item-3"></div>
      </div>
    ),
  },
  {
    title: "Costly Integration",
    description: "Managing multiple subscriptions and rising bills.",
    visual: (
      <div className="problem-visual-content">
        <div className="puzzle-piece"></div>
      </div>
    ),
  },
  {
    title: "Performance Bottlenecks",
    description: "Legacy systems fail to scale with real-time demands.",
    visual: (
      <div className="problem-visual-content">
        <div className="performance-bar bar-1"></div>
        <div className="performance-bar bar-2"></div>
        <div className="performance-bar bar-3"></div>
      </div>
    ),
  },
]
