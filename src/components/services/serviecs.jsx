import React, { useRef, useEffect, useState } from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';
import { BsCodeSlash, BsServer, BsPen, BsArrowRight } from 'react-icons/bs';
import { MdOutlineDesignServices, MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineCog } from 'react-icons/hi';

const Services = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('services--visible');
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            id: 1,
            icon: BsCodeSlash,
            title: "Front-End Development",
            color: "#60a5fa",
            description: "Building responsive and interactive user interfaces",
            features: [
                "Building responsive and interactive UIs with React, HTML, CSS, and JavaScript",
                "Mobile-first design with cross-browser compatibility",
                "Integrating third-party libraries and APIs for added functionality",
                "Performance optimization and best practices implementation"
            ]
        },
        {
            id: 2,
            icon: BsServer,
            title: "Back-End Development",
            color: "#34d399",
            description: "Developing scalable server-side applications",
            features: [
                "Developing scalable server-side applications using Node.js and Express",
                "Managing databases with MongoDB and creating RESTful APIs",
                "Implementing secure authentication and optimizing server performance",
                "Microservices architecture and API integration"
            ]
        },
        {
            id: 3,
            icon: BsPen,
            title: "Content Creation",
            color: "#f59e0b",
            description: "Creating engaging and SEO-optimized content",
            features: [
                "Creating engaging articles and blogs that resonate with your audience",
                "Writing SEO-optimized content that enhances online visibility",
                "Technical documentation and API guides",
                "Content strategy and editorial planning"
            ]
        }
    ];

    return (
        <section id='services' ref={sectionRef}>
            <div className="section__header">
                <span className="section__eyebrow">What I Offer</span>
                <h2 className="section__title">Services</h2>
                <p className="section__subtitle">
                    Comprehensive solutions to bring your digital vision to life
                </p>
            </div>

            <div className='container services__container'>
                {services.map((service, index) => (
                    <article 
                        className='service__card' 
                        key={service.id}
                        style={{ 
                            '--service-color': service.color,
                            animationDelay: `${0.3 + index * 0.15}s`,
                            opacity: 0,
                            animation: isVisible ? `fadeInUp 0.7s ease forwards` : 'none'
                        }}
                    >
                        <div className="service__card-inner">
                            <div className="service__header">
                                <div className="service__icon-wrapper">
                                    <service.icon className="service__icon" />
                                </div>
                                <div className="service__header-content">
                                    <h3>{service.title}</h3>
                                    <span className="service__description">{service.description}</span>
                                </div>
                            </div>

                            <ul className='service__list'>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="service__list-item">
                                        <BiCheck className='service__list-icon' />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="service__footer">
                                <span className="service__learn-more">
                                    Learn More
                                    <BsArrowRight className="service__arrow" />
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="services__decorations">
                <div className="services__decoration services__decoration--1"></div>
                <div className="services__decoration services__decoration--2"></div>
            </div>
        </section>
    )
}

export default Services;