import React, { useEffect, useRef } from 'react';
import "./about.css";
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const MyPhoto = "/images/02.jpg";

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('about--visible');
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef}>
            <div className="about__header">
                <h5 className="about__subtitle">Get To Know</h5>
                <h2 className="about__title">About Me</h2>
                <div className="about__title-line"></div>
            </div>

            <div className="container about__container">
                {/* Image Column */}
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MyPhoto} alt="About image" />
                        <div className="about__image-overlay"></div>
                    </div>
                    <div className="about__image-ring"></div>
                    <div className="about__image-ring about__image-ring--delayed"></div>
                </div>

                {/* Content Column */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card" id="about-experience">
                            <div className="about__card-icon-wrapper">
                                <FaAward className="about__icon" />
                            </div>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>

                        <article className="about__card" id="about-clients">
                            <div className="about__card-icon-wrapper">
                                <FiUser className="about__icon" />
                            </div>
                            <h5>Clients</h5>
                            <small>Freelance Ready</small>
                        </article>

                        <article className="about__card" id="about-projects">
                            <div className="about__card-icon-wrapper">
                                <VscFolderLibrary className="about__icon" />
                            </div>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>

                    <p className="about__text">
                        My name is <span className="about__highlight">Muhammad Mudassar Younas</span>,
                        and I am a Computer Science student at the <span className="about__highlight">University of Engineering and Technology (UET) Lahore</span>.
                        I have a strong passion for software development, particularly in MERN stack and React.js.
                        I am also actively involved in <span className="about__highlight">Codator</span>,
                        a university tech society, where I serve as the Director of Research and Planning
                        and the General Secretary of Codator CS&E.
                    </p>

                    <a href="#contact" className="btn about__cta">
                        Let's Talk
                        <span className="about__cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;