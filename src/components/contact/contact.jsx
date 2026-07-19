import React, { useRef, useEffect, useState } from 'react';
import "./contact.css";
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('contact--visible');
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                    e.target.reset();
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    console.log('FAILED...', error.text);
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
            );
    };

    const contactOptions = [
        {
            icon: MdOutlineEmail,
            title: "Email",
            value: "mudassaryounas362@gmail.com",
            link: "mailto:mudassaryounas362@gmail.com",
            color: "#60a5fa"
        },
        {
            icon: BsWhatsapp,
            title: "WhatsApp",
            value: "+92-317-426-8086",
            link: "https://wa.me/923174268086",
            color: "#34d399"
        },
        {
            icon: BsLinkedin,
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com/in/mudassar2026/",
            color: "#0a66c2"
        },
        {
            icon: BsGithub,
            title: "GitHub",
            value: "View my work",
            link: "https://github.com/MuhammadMudassarYounas",
            color: "#ffffff"
        }
    ];

    return (
        <section id="contact" ref={sectionRef}>
            <div className="section__header">
                <span className="section__eyebrow">Get In Touch</span>
                <h2 className="section__title">Let's Work Together</h2>
                <p className="contact__lead">
                    Have a project in mind or an opportunity to discuss? 
                    <br />My inbox is always open.
                </p>
            </div>

            <div className='container contact__container'>
                {/* Contact Options */}
                <div className='contact__options'>
                    {contactOptions.map((option, index) => (
                        <article 
                            className='contact__option' 
                            key={index}
                            style={{ 
                                '--contact-color': option.color,
                                animationDelay: `${0.3 + index * 0.1}s`,
                                opacity: 0,
                                animation: isVisible ? `fadeInLeft 0.6s ease forwards` : 'none'
                            }}
                        >
                            <div className="contact__option-icon-wrapper">
                                <option.icon className='contact__option-icon' />
                            </div>
                            <h4>{option.title}</h4>
                            <h6>{option.value}</h6>
                            <a 
                                href={option.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="contact__option-link"
                            >
                                <span>Send a message</span>
                                <FiSend className="contact__option-arrow" />
                            </a>
                        </article>
                    ))}
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-header">
                        <h3>Send a Message</h3>
                        <p>Fill in the form below and I'll get back to you soon</p>
                    </div>

                    <div className="form__group">
                        <label htmlFor="name">
                            <span className="form__label-icon">👤</span>
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            name='name' 
                            id="name"
                            placeholder='Your Full Name' 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        <div className="form__input-highlight"></div>
                    </div>

                    <div className="form__group">
                        <label htmlFor="email">
                            <span className="form__label-icon">✉️</span>
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            name='email' 
                            id="email"
                            placeholder='Your Email' 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <div className="form__input-highlight"></div>
                    </div>

                    <div className="form__group">
                        <label htmlFor="message">
                            <span className="form__label-icon">💬</span>
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message"
                            rows="6" 
                            placeholder='Your Message' 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className="form__input-highlight"></div>
                    </div>

                    <button 
                        type='submit' 
                        className='btn contact__btn-submit' 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                <FiSend className="btn-icon" />
                                Send Message
                            </>
                        )}
                    </button>

                    {submitStatus === 'success' && (
                        <div className="submit__msg success">
                            <span className="msg-icon">✓</span>
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="submit__msg error">
                            <span className="msg-icon">✕</span>
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>

            {/* Decorative Elements */}
            <div className="contact__decorations">
                <div className="contact__decoration contact__decoration--1"></div>
                <div className="contact__decoration contact__decoration--2"></div>
            </div>
        </section>
    )
}

export default Contact;