import React, { useEffect, useState } from 'react';
import "./header.css";
import { CV } from './CIV';
import { HeaderSocials } from './headerSocials';
const MyPhoto = "/images/WhatsApp_Image_2025-04-26_at_01.36.44_21ffeedf-removebg-preview.png"

const roles = [
    "Full Stack (MERN) Developer",
    "React.js Specialist",
    "Node.js Engineer",
    "Mongo DB Developer",
    "Express.js Developer",
];

const Header = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                }, 40);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <>
            <header id="home">
                <div className={`container header__container ${isVisible ? 'header--visible' : ''}`}>

                    <div className="header__content">
                        <span className="header__greeting">Hello I'm</span>
                        <h1 className="header__name">
                            Muhammad <span className="header__name-highlight">Mudassar</span>
                        </h1>
                        <h2 className="header__role">
                            <span className="header__role-text">{displayText}</span>
                            <span className="header__cursor">|</span>
                        </h2>
                        <p className="header__description">
                            Crafting modern, scalable web applications with clean code and pixel-perfect design.
                        </p>
                        <CV />
                    </div>

                    <div className="header__image-wrapper">
                        <div className="header__image-ring"></div>
                        <div className="header__image-ring header__image-ring--delayed"></div>
                        <div className='me'>
                            <img src={MyPhoto} alt="Muhammad Mudassar" />
                        </div>
                    </div>

                    <HeaderSocials />
                    <a href="#contact" className='scroll__down'>
                        <span className="scroll__down-text">Scroll Down</span>
                        <span className="scroll__down-icon">↓</span>
                    </a>
                </div>
            </header>
        </>
    )
}
export default Header;