import React, { useRef, useEffect, useState } from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';
import { BsCodeSlash, BsServer, BsPen } from 'react-icons/bs';

const Services = () => {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='services' ref={sectionRef} className={isVisible ? "services--visible" : ""}>
            <div className="services__header-main">
                <h5 className="services__subtitle">What I Offer</h5>
                <h2 className="services__title">Services</h2>
                <div className="services__title-line"></div>
            </div>

            <div className='container services__container'>
                {/* Front-End Development Service */}
                <article className='service__card'>
                    <div className="service__header">
                        <div className="service__icon-wrapper">
                            <BsCodeSlash className="service__icon" />
                        </div>
                        <h3>Front-End Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Building responsive and interactive UIs with React, HTML, CSS, and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Mobile-first design with cross-browser compatibility.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Integrating third-party libraries and APIs for added functionality.</p>
                        </li>
                    </ul>
                </article>

                {/* Back-End Development Service */}
                <article className='service__card'>
                    <div className="service__header">
                        <div className="service__icon-wrapper">
                            <BsServer className="service__icon" />
                        </div>
                        <h3>Back-End Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Developing scalable server-side applications using Node.js and Express.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Managing databases with MongoDB and creating RESTful APIs.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Implementing secure authentication and optimizing server performance.</p>
                        </li>
                    </ul>
                </article>

                {/* Content Creation Service */}
                <article className='service__card'>
                    <div className="service__header">
                        <div className="service__icon-wrapper">
                            <BsPen className="service__icon" />
                        </div>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Creating engaging articles and blogs that resonate with your audience.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Writing SEO-optimized content that enhances online visibility.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services;
