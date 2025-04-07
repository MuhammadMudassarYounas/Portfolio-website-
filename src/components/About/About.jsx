import React from 'react';
import "./about.css";
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const MyPhoto = "/images/02.jpg"
const About =()=>{
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={MyPhoto} alt="About image" />

                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                        <article className='about__card' id='Clients'>
                            <FiUser className='about__icon'/>
                            <h5>Clients</h5>
                            <small>No</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>
                    My name is Muhammad Mudassar Younas, and I am a Computer Science student at the University of Engineering and Technology (UET) Lahore. I have a strong passion for software development, particularly in MERN stack and React.js. I am also actively involved in Codator, a university tech society, where I serve as the Director of Research and Planning and the General Secretary of Codator CS&E.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;