import React, { useEffect, useRef, useState } from 'react';
import "./About.css";
import { FaAward, FaCode, FaUsers } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { MdOutlineSchool, MdOutlineWork } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';

const MyPhoto = "/images/02.jpeg";

const About = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('about--visible');
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { icon: FaAward, label: "Experience", value: "1+ Year", color: "#f59e0b" },
        { icon: FiUser, label: "Clients", value: "Freelance Ready", color: "#60a5fa" },
        { icon: VscFolderLibrary, label: "Projects", value: "20+ Completed", color: "#34d399" },
    ];

    return (
        <section id="about" ref={sectionRef}>
            <div className="section__header">
                <span className="section__eyebrow">Get To Know Me</span>
                <h2 className="section__title">About Me</h2>
            </div>

            <div className="container about__container">
                {/* Image Column */}
                <div className="about__me">
                    <div className="about__me-image-wrapper">
                        <div className="about__me-image">
                            <img src={MyPhoto} alt="Muhammad Mudassar Younas" />
                            <div className="about__image-overlay"></div>
                            <div className="about__image-badge">
                                <HiOutlineLightBulb />
                                <span>Developer</span>
                            </div>
                        </div>
                        <div className="about__image-ring"></div>
                        <div className="about__image-ring about__image-ring--delayed"></div>
                    </div>
                    
                    {/* Social/Status Indicators */}
                    <div className="about__status">
                        <span className="about__status-dot"></span>
                        <span className="about__status-text">Available for work</span>
                    </div>
                </div>

                {/* Content Column */}
                <div className="about__content">
                    <div className="about__cards">
                        {stats.map((stat, index) => (
                            <article 
                                className="about__card" 
                                key={index}
                                style={{ 
                                    animationDelay: `${0.3 + index * 0.1}s`,
                                    opacity: 0,
                                    animation: isVisible ? `fadeInUp 0.6s ease forwards` : 'none'
                                }}
                            >
                                <div className="about__card-icon-wrapper" style={{ '--icon-color': stat.color }}>
                                    <stat.icon className="about__icon" />
                                </div>
                                <h5>{stat.label}</h5>
                                <small>{stat.value}</small>
                            </article>
                        ))}
                    </div>

                    <div className="about__text-wrapper">
                        <p className="about__text">
                            I'm <span className="about__highlight">Muhammad Mudassar Younas</span>,
                            a passionate Computer Science undergraduate at 
                            <span className="about__highlight"> UET Lahore</span>,
                            building scalable, real-world web applications with the 
                            <span className="about__highlight"> MERN Stack</span> and 
                            <span className="about__highlight"> React.js</span>.
                        </p>
                        <p className="about__text">
                            Beyond code, I lead as <span className="about__highlight">Director of Research & Planning</span> and
                            <span className="about__highlight"> General Secretary at Codator</span>, 
                            driving technical initiatives and community growth within UET's premier tech society.
                        </p>
                    </div>

                    <div className="about__cta-group">
                        <a href="#contact" className="btn btn-primary about__cta">
                            Let's Talk
                            <span className="about__cta-arrow">→</span>
                        </a>
                        <a href="#experience" className="btn btn-outline about__cta-secondary">
                            View Skills
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="about__decorations">
                <div className="about__decoration about__decoration--1"></div>
                <div className="about__decoration about__decoration--2"></div>
            </div>
        </section>
    );
};

export default About;