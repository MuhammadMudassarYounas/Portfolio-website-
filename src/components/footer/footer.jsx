import React from 'react';
import "./footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__container">
                <a href="#" className="footer__logo">
                    Wis<span className="footer__logo-highlight">Dev</span> Technology
                </a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FiInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <FiTwitter />
                    </a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; {new Date().getFullYear()} WisDev Technology. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;