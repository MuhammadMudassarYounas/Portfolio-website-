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
    SiRedux,
    SiNextdotjs
} from "react-icons/si";

import "./ExperienceLogo.css";

const icons = [
    { Icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
    { Icon: SiReact, color: "#61dafb", name: "React" },
    { Icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    { Icon: SiExpress, color: "#000000", name: "Express" },
    { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { Icon: SiCss3, color: "#264de4", name: "CSS3" },
    { Icon: SiBootstrap, color: "#7952b3", name: "Bootstrap" },
    { Icon: SiTailwindcss, color: "#38b2ac", name: "Tailwind" },
    { Icon: SiHtml5, color: "#e34f26", name: "HTML5" },
    { Icon: SiGit, color: "#f05032", name: "Git" },
    { Icon: SiGithub, color: "#181717", name: "GitHub" },
];

const MovingIcons = () => {
    return (
        <div className="experience-container">
            <h2 className="tech-stack-title">My Tech Stack</h2>
            <div className="icon-wrapper">
                <div className="icon-strip">
                    {[...icons, ...icons].map(({ Icon, color, name }, index) => (
                        <div
                            className="icon-circle"
                            key={index}
                            style={{ backgroundColor: color }}
                            data-tooltip={name}
                        >
                            <Icon className="icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovingIcons;