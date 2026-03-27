import React, { useRef, useEffect, useState } from 'react';
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';

import { BsWhatsapp } from 'react-icons/bs';
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
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

    return (
        <section id="contact" ref={sectionRef} className={isVisible ? "contact--visible" : ""}>
            <div className="contact__header">
                <h5 className="contact__subtitle">Get In Touch</h5>
                <h2 className="contact__title">Contact Me</h2>
                <div className="contact__title-line"></div>
            </div>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <div className="contact__option-icon-wrapper">
                            <MdOutlineEmail className='contact__option-icon' />
                        </div>
                        <h4>Email</h4>
                        <h6>mudassaryounas362@gmail.com</h6>
                        <a href="mailto:mudassaryounas362@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>


                    <article className='contact__option'>
                        <div className="contact__option-icon-wrapper">
                            <BsWhatsapp className='contact__option-icon' />
                        </div>
                        <h4>WhatsApp</h4>
                        <h6>+92-3174268086</h6>
                        <a href="https://wa.me/923174268086" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="form__group">
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <div className="form__input-highlight"></div>
                    </div>

                    <div className="form__group">
                        <input type="email" name='email' placeholder='Your Email' required />
                        <div className="form__input-highlight"></div>
                    </div>

                    <div className="form__group">
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <div className="form__input-highlight"></div>
                    </div>

                    <button type='submit' className='btn contact__btn-submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitStatus === 'success' && (
                        <div className="submit__msg success">Message sent successfully!</div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="submit__msg error">Oops! Something went wrong.</div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact;