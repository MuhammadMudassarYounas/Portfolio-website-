import React from 'react';
import "./footer.css";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { MdOutlineDeveloperMode } from 'react-icons/md';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: BsLinkedin, url: "https://linkedin.com/in/mudassar-younas", label: "LinkedIn", color: "#0a66c2" },
        { icon: BsGithub, url: "https://github.com/mudassaryounas", label: "GitHub", color: "#ffffff" },
        { icon: BsTwitter, url: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
        { icon: BsInstagram, url: "https://instagram.com", label: "Instagram", color: "#e4405f" },
    ];

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Skills" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Work" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <footer id="footer">
            <div className="footer__container">
                {/* Back to Top Button */}
                <button 
                    className="footer__scroll-top" 
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FiArrowUp className="footer__scroll-icon" />
                    <span className="footer__scroll-text">Top</span>
                </button>

                {/* Logo */}
                <a href="#home" className="footer__logo">
                    <span className="footer__logo-icon">
                        <MdOutlineDeveloperMode />
                    </span>
                    <span className="footer__logo-text">
                        Muhammad <span className="footer__logo-highlight">Mudassar</span>
                    </span>
                </a>

                {/* Navigation Links */}
                <ul className="permalinks">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Social Links */}
                <div className="footer__socials">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a 
                                key={social.label}
                                href={social.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                aria-label={social.label}
                                className="footer__social-link"
                                style={{ '--social-color': social.color }}
                            >
                                <Icon />
                                <span className="footer__social-tooltip">{social.label}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="footer__divider">
                    <span className="footer__divider-line"></span>
                    <span className="footer__divider-icon">✦</span>
                    <span className="footer__divider-line"></span>
                </div>

                {/* Copyright */}
                <div className="footer__copyright">
                    <p>
                        &copy; {new Date().getFullYear()} Muhammad Mudassar Younas. 
                        Crafted with <FiHeart className="footer__heart" /> and passion.
                    </p>
                    <p className="footer__copyright-sub">
                        Full Stack Developer | MERN Stack Specialist
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer__decorations">
                <div className="footer__decoration footer__decoration--1"></div>
                <div className="footer__decoration footer__decoration--2"></div>
            </div>
        </footer>
    );
}

export default Footer;