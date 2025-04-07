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
                    <article className='services'>
                        <div className='services__head'>
                            <h3>Web Development</h3>

                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Lorem ipsum dolor, sit amet</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Lorem ipsum dolor, sit amet</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Lorem ipsum dolor, sit amet</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Lorem ipsum dolor, sit amet</p>
                            </li>
                            

                        </ul>
                    </article>

                    <article className='services'>
                        <div className='services__head'>
                            <h3>Web Development</h3>

                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Utilizing MERN stack technologies for scalable solutions</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Ensuring seamless experience across all devices</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Connecting third-party services to enhance functionality</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Performance Optimization</p>
                            </li>
                        </ul>
                    </article>
                    <article className='services'>
                        <div className='services__head'>
                            <h3>Content Creation</h3>

                        </div>
                        <ul className='Services__list'>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Developing informative articles that inform audience</p>
                            </li>
                            <li>
                                <BiCheck className='services__list-icon' />
                                <p>Producing clear website content that reflects your brand </p>
                            </li>


                        </ul>
                    </article>


                </div>

            </section>
        </>
    )
}
export default Services;