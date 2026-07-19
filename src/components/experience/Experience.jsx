import React, { useEffect, useRef, useState } from 'react';
import "./Experience.css";
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaCode, FaServer } from 'react-icons/fa';
import MovingIcons from './ExperienceLogo';

const frontendSkills = [
    { name: "React.js", level: "Experienced", percent: 90 },
    { name: "JavaScript (ES6+)", level: "Experienced", percent: 92 },
    { name: "React Router", level: "Experienced", percent: 90 },
    { name: "Tailwind CSS", level: "Experienced", percent: 94 },
    { name: "HTML5", level: "Experienced", percent: 98 },
    { name: "Bootstrap", level: "Experienced", percent: 95 },
    { name: "CSS3", level: "Experienced", percent: 95 },
    { name: "Redux Toolkit", level: "Experienced", percent: 88 },
    { name: "Responsive Design", level: "Experienced", percent: 95 },
    { name: "Axios & API Integration", level: "Experienced", percent: 90 },
];

const backendSkills = [
    { name: "Node.js", level: "Experienced", percent: 90 },
    { name: "Express.js", level: "Experienced", percent: 90 },
    { name: "MongoDB", level: "Experienced", percent: 88 },
    { name: "MySQL", level: "Experienced", percent: 85 },
    { name: "REST API", level: "Experienced", percent: 92 },
    { name: "JWT Authentication", level: "Experienced", percent: 90 },
    { name: "FastAPI", level: "Intermediate", percent: 75 },
    { name: "Python", level: "Intermediate", percent: 78 },
    { name: "Git & GitHub", level: "Experienced", percent: 90 },
    { name: "Render & Vercel", level: "Experienced", percent: 86 },
];

const getLevelClass = (level) => {
    if (level === "Experienced") return "exp-level--experienced";
    if (level === "Intermediate") return "exp-level--intermediate";
    return "exp-level--basic";
};

const Experience = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('experience--visible');
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section id="experience" ref={sectionRef}>
                <div className="section__header">
                    <span className="section__eyebrow">What I Bring</span>
                    <h2 className="section__title">Skills &amp; Experience</h2>
                </div>

                <div className="container experience__container">
                    {/* Frontend Panel */}
                    <div className="experience__panel experience__frontend">
                        <div className="experience__panel-header">
                            <span className="experience__panel-icon">
                                <FaCode />
                            </span>
                            <h3>Frontend Development</h3>
                        </div>
                        <div className="experience__content">
                            {frontendSkills.map((skill, index) => (
                                <article
                                    className="experience__details"
                                    key={index}
                                    style={{ 
                                        animationDelay: `${0.5 + index * 0.1}s`,
                                        opacity: 0,
                                        animation: isVisible ? `fadeInUp 0.6s ease forwards` : 'none'
                                    }}
                                >
                                    <div className="experience__details-top">
                                        <BsPatchCheckFill className="experience__details-icon" />
                                        <div className="experience__details-info">
                                            <h4>{skill.name}</h4>
                                            <small className={getLevelClass(skill.level)}>
                                                {skill.level}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="experience__progress-bar">
                                        <div 
                                            className="experience__progress-fill"
                                            style={{ 
                                                '--progress-width': isVisible ? `${skill.percent}%` : '0%',
                                                animationDelay: `${0.7 + index * 0.1}s`
                                            }}
                                        ></div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Backend Panel */}
                    <div className="experience__panel experience__backend">
                        <div className="experience__panel-header">
                            <span className="experience__panel-icon">
                                <FaServer />
                            </span>
                            <h3>Backend Development</h3>
                        </div>
                        <div className="experience__content">
                            {backendSkills.map((skill, index) => (
                                <article
                                    className="experience__details"
                                    key={index}
                                    style={{ 
                                        animationDelay: `${0.7 + index * 0.1}s`,
                                        opacity: 0,
                                        animation: isVisible ? `fadeInUp 0.6s ease forwards` : 'none'
                                    }}
                                >
                                    <div className="experience__details-top">
                                        <BsPatchCheckFill className="experience__details-icon" />
                                        <div className="experience__details-info">
                                            <h4>{skill.name}</h4>
                                            <small className={getLevelClass(skill.level)}>
                                                {skill.level}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="experience__progress-bar">
                                        <div 
                                            className="experience__progress-fill"
                                            style={{ 
                                                '--progress-width': isVisible ? `${skill.percent}%` : '0%',
                                                animationDelay: `${0.9 + index * 0.1}s`
                                            }}
                                        ></div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <MovingIcons />
            </section>
        </>
    );
};

export default Experience;