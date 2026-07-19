import React, { useEffect, useState } from 'react';
import "./nav.css";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Work" },
    { href: "#contact", label: "Contact" },
];

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href) => {
        setActiveNav(href);
        setMenuOpen(false);
    };

    return (
        <nav className={scrolled ? "nav--scrolled" : ""}>
            <div className="nav__container">
                <a href="#home" className="nav__logo" onClick={() => handleClick("#home")}>
                    M<span className="nav__logo-dot">.</span>Mudassar Younas
                </a>

                <div className="nav__links">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleClick(link.href)}
                            className={activeNav === link.href ? "active" : ""}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#contact" className="btn btn-primary nav__cta" onClick={() => handleClick("#contact")}>
                    Hire Me
                </a>

                <button
                    className={`nav__toggle ${menuOpen ? "nav__toggle--open" : ""}`}
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`nav__mobile ${menuOpen ? "nav__mobile--open" : ""}`}>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => handleClick(link.href)}
                        className={activeNav === link.href ? "active" : ""}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className="btn btn-primary" onClick={() => handleClick("#contact")}>
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Nav;
