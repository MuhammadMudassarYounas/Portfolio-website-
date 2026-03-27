import React, { useEffect, useRef } from 'react';
import "./Experience.css";
import { BsPatchCheckFill } from 'react-icons/bs';
import MovingIcons from './ExperienceLogo';

const frontendSkills = [
    { name: "JavaScript", level: "Experienced", percent: 90 },
    { name: "React JS", level: "Experienced", percent: 85 },
    { name: "HTML", level: "Experienced", percent: 95 },
    { name: "CSS", level: "Intermediate", percent: 75 },
    { name: "TailWind", level: "Intermediate", percent: 70 },
    { name: "Bootstrap", level: "Experienced", percent: 85 },
];

const backendSkills = [
    { name: "Node JS", level: "Basic", percent: 50 },
    { name: "MongoDB", level: "Basic", percent: 45 },
    { name: "MySql", level: "Experienced", percent: 80 },
];

const getLevelClass = (level) => {
    if (level === "Experienced") return "exp-level--experienced";
    if (level === "Intermediate") return "exp-level--intermediate";
    return "exp-level--basic";
};

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
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
                <div className="experience__header">
                    <h5 className="experience__subtitle">What Skills I Have</h5>
                    <h2 className="experience__title">My Experience</h2>
                    <div className="experience__title-line"></div>
                </div>

                <div className="container experience__container">
                    {/* Frontend Panel */}
                    <div className="experience__panel experience__frontend" id="experience-frontend">
                        <div className="experience__panel-header">
                            <span className="experience__panel-icon">⚡</span>
                            <h3>Frontend Development</h3>
                        </div>
                        <div className="experience__content">
                            {frontendSkills.map((skill, index) => (
                                <article
                                    className="experience__details"
                                    key={index}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
                                            style={{ '--progress-width': `${skill.percent}%` }}
                                        ></div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Backend Panel */}
                    <div className="experience__panel experience__backend" id="experience-backend">
                        <div className="experience__panel-header">
                            <span className="experience__panel-icon">🛠️</span>
                            <h3>Backend Development</h3>
                        </div>
                        <div className="experience__content">
                            {backendSkills.map((skill, index) => (
                                <article
                                    className="experience__details"
                                    key={index}
                                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
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
                                            style={{ '--progress-width': `${skill.percent}%` }}
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