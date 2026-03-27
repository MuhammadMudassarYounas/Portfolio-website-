import React from "react";
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiCss3,
    SiBootstrap,
    SiTailwindcss,
    SiHtml5,
    SiTypescript,
    SiGit,
    SiGithub,
    SiNextdotjs
} from "react-icons/si";

import "./ExperienceLogo.css";

const row1 = [
    { Icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
    { Icon: SiReact, color: "#61dafb", name: "React" },
    { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { Icon: SiHtml5, color: "#e34f26", name: "HTML5" },
    { Icon: SiCss3, color: "#264de4", name: "CSS3" },
    { Icon: SiTailwindcss, color: "#38b2ac", name: "Tailwind" },
    { Icon: SiBootstrap, color: "#7952b3", name: "Bootstrap" },
];

const row2 = [
    { Icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#ffffff", name: "Express" },
    { Icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    { Icon: SiGit, color: "#f05032", name: "Git" },
    { Icon: SiGithub, color: "#ffffff", name: "GitHub" },
];

const TechBadge = ({ Icon, color, name }) => (
    <div className="tech-badge">
        <div className="tech-badge-inner" style={{ '--hover-color': color }}>
            <Icon className="tech-badge-icon" />
            <span className="tech-badge-name">{name}</span>
        </div>
    </div>
);

const TechStackPremium = () => {
    return (
        <div className="tech-stack-wrapper">
            <h2 className="tech-stack-title">Technologies I Use</h2>
            
            <div className="tech-marquee-container">
                {/* Row 1 - Moves Left */}
                <div className="tech-marquee-row">
                    <div className="tech-marquee-track track-left">
                        {[...row1, ...row1, ...row1].map((tech, index) => (
                            <TechBadge key={`r1-${index}`} {...tech} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="tech-marquee-row">
                    <div className="tech-marquee-track track-right">
                        {[...row2, ...row2, ...row2].map((tech, index) => (
                            <TechBadge key={`r2-${index}`} {...tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackPremium;