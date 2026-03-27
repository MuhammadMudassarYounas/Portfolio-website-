import React, { useRef, useEffect, useState } from 'react';
import "./portfolio.css";
import { FaGithub } from 'react-icons/fa';

const Img1 = "/images/Todo.png";
const Img2 = "/images/WeatherApp.webp";
const Img3 = "/images/QuizApp.png";
const Img4 = "/images/QrCode.webp";
const Img5 = "/images/QuizApp.png";
const Img6 = "/images/QrCode.webp";

// Enhanced data structure with Tech Stack tags for a more professional look
const data = [
    {
        id: 1,
        image: Img1,
        title: "React Todo Application",
        tech: ["React", "CSS3", "JavaScript"],
        github: "https://github.com"
    },
    {
        id: 2,
        image: Img2,
        title: "Real-time Weather Dashboard",
        tech: ["API Integration", "React", "Node.js"],
        github: "https://github.com"
    },
    {
        id: 3,
        image: Img3,
        title: "Interactive Quiz Application",
        tech: ["Next.js", "Tailwind", "MongoDB"],
        github: "https://github.com"
    },
    {
        id: 4,
        image: Img4,
        title: "Dynamic QR Code Generator",
        tech: ["JavaScript", "React", "Canvas"],
        github: "https://github.com"
    },
    {
        id: 5,
        image: Img5,
        title: "Full-Stack E-Commerce",
        tech: ["MERN", "Redux", "Stripe"],
        github: "https://github.com"
    },
    {
        id: 6,
        image: Img6,
        title: "Portfolio Landing Page",
        tech: ["React", "CSS Variables", "Framer"],
        github: "https://github.com"
    }
];

const Portfolio = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='portfolio' ref={sectionRef} className={isVisible ? "portfolio--visible" : ""}>
            <div className="portfolio__header">
                <h5 className="portfolio__subtitle">My Recent Work</h5>
                <h2 className="portfolio__title">Portfolio Projects</h2>
                <div className="portfolio__title-line"></div>
            </div>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, tech, github }, index) => (
                    <article 
                        key={id} 
                        className='portfolio__item'
                        style={{ '--animation-order': index + 1 }}
                    >
                        <div className='portfolio__item-image-wrapper'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className="portfolio__item-overlay">
                                <a href={github} className='btn portfolio__btn-overlay' target='_blank' rel="noopener noreferrer">
                                    <FaGithub /> View Code
                                </a>
                            </div>
                        </div>
                        
                        <div className="portfolio__item-content">
                            <h3>{title}</h3>
                            <div className="portfolio__item-tech">
                                {tech.map((item, i) => (
                                    <span key={i} className="tech-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;