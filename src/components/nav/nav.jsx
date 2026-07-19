import React, { useEffect, useState } from 'react';
import "./nav.css";
import { FiHome, FiUser, FiCode, FiServer, FiBriefcase, FiMail } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { MdOutlineDeveloperMode } from 'react-icons/md';

const links = [
    { href: "#home", label: "Home", icon: FiHome },
    { href: "#about", label: "About", icon: FiUser },
    { href: "#experience", label: "Skills", icon: FiCode },
    { href: "#services", label: "Services", icon: FiServer },
    { href: "#portfolio", label: "Work", icon: FiBriefcase },
    { href: "#contact", label: "Contact", icon: FiMail },
];

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 20);
            
            // Calculate scroll progress
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (winScroll / height) * 100;
            setScrollProgress(progress);
        };
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href) => {
        setActiveNav(href);
        setMenuOpen(false);
    };

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <nav className={`${scrolled ? "nav--scrolled" : ""} ${menuOpen ? "nav--menu-open" : ""}`}>
            {/* Progress Bar */}
            <div className="nav__progress-bar">
                <div 
                    className="nav__progress-fill" 
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <div className="nav__container">
                {/* Logo */}
                <a href="#home" className="nav__logo" onClick={() => handleClick("#home")}>
                    <span className="nav__logo-icon">
                        <MdOutlineDeveloperMode />
                    </span>
                    <span className="nav__logo-text">
                        <span className="logo-first">M</span>
                        <span className="logo-dot">.</span>
                        <span className="logo-last">Mudassar</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="nav__links">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleClick(link.href)}
                                className={`nav__link ${activeNav === link.href ? "active" : ""}`}
                            >
                                <Icon className="nav__link-icon" />
                                <span className="nav__link-label">{link.label}</span>
                                {activeNav === link.href && (
                                    <span className="nav__link-indicator"></span>
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <a href="#contact" className="btn btn-primary nav__cta" onClick={() => handleClick("#contact")}>
                    <span>Hire Me</span>
                    <span className="nav__cta-arrow">→</span>
                </a>

                {/* Mobile Toggle */}
                <button
                    className={`nav__toggle ${menuOpen ? "nav__toggle--open" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`nav__mobile ${menuOpen ? "nav__mobile--open" : ""}`}>
                <div className="nav__mobile-inner">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleClick(link.href)}
                                className={`nav__mobile-link ${activeNav === link.href ? "active" : ""}`}
                            >
                                <Icon className="nav__mobile-icon" />
                                <span>{link.label}</span>
                                {activeNav === link.href && (
                                    <span className="nav__mobile-active"></span>
                                )}
                            </a>
                        );
                    })}
                    <a href="#contact" className="btn btn-primary nav__mobile-cta" onClick={() => handleClick("#contact")}>
                        <span>Hire Me</span>
                        <span className="nav__cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;