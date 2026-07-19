import React from 'react';
import "./footer.css";
import { BsDribbble, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__container">
                <a href="#home" className="footer__logo">
                    Muhammad <span className="footer__logo-highlight">Mudassar</span>
                </a>

                <ul className="permalinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <BsGithub />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">
                        <BsDribbble />
                    </a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; {new Date().getFullYear()} Muhammad Mudassar. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;