import React from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <>
            <section id='services'>
                <h5>What I Offer</h5>
                <h2>Services</h2>

                <div className='container services__container'>
                    {/* Front-End Development Service */}
                    <article className='services'>
                        <div className='services__head'>
                            <h3>Front-End Development</h3>
                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Building responsive and interactive UIs with React, HTML, CSS, and JavaScript.</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Mobile-first design with cross-browser compatibility.</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Integrating third-party libraries and APIs for added functionality.</p>
                            </li>
                        </ul>
                    </article>

                    {/* Back-End Development Service */}
                    <article className='services'>
                        <div className='services__head'>
                            <h3>Back-End Development</h3>
                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Developing scalable server-side applications using Node.js and Express.</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Managing databases with MongoDB and creating RESTful APIs.</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Implementing secure authentication and optimizing server performance.</p>
                            </li>
                        </ul>
                    </article>

                    {/* Content Creation Service */}
                    <article className='services'>
                        <div className='services__head'>
                            <h3>Content Creation</h3>
                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Creating engaging articles and blogs that resonate with your audience.</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Writing SEO-optimized content that enhances online visibility.</p>
                            </li>
                        </ul>
                    </article>

                </div>

            </section>
        </>
    )
}

export default Services;
