import React, { useRef, useEffect, useState } from 'react';
import "./Testimonials.css";

const AVTR1 = "/images/abdulahad.jpg";
const AVTR2 = "/images/naeem.jpg";
const AVTR3 = "/images/faisal.jpg";

// Import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const testimonials = [
    {
        id: 1,
        img: AVTR1,
        name: "Abdulahad",
        role: "Project Manager",
        review: "Mudassar is an exceptional Full Stack Developer. He transformed our outdated platform into a lightning-fast, modern web application using React and Node.js. His attention to detail, especially in mobile responsiveness and UI design, is unmatched.",
        rating: 5,
        company: "Tech Innovations Inc."
    },
    {
        id: 2,
        img: AVTR2,
        name: "Naeem Atif",
        role: "Startup Founder",
        review: "Working with Mudassar was a fantastic experience. He has a deep understanding of frontend aesthetics and robust backend architecture. He delivered our project ahead of schedule, with clean and maintainable code.",
        rating: 5,
        company: "Nexus Solutions"
    },
    {
        id: 3,
        img: AVTR3,
        name: "Faisal Faiz",
        role: "Tech Lead",
        review: "I highly recommend Mudassar for any complex web development needs. His proficiency in modern frameworks like Next.js helped us scale our product flawlessly. He is proactive, communicative, and truly cares about success.",
        rating: 4.5,
        company: "Digital Dynamics"
    }
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="testimonial__stars">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="star star--full" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="star star--half" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaStar key={`empty-${i}`} className="star star--empty" />
            ))}
        </div>
    );
};

const Testimonials = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('testimonials--visible');
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='testimonials' ref={sectionRef}>
            <div className="section__header">
                <span className="section__eyebrow">Client Feedback</span>
                <h2 className="section__title">Testimonials</h2>
                <p className="section__subtitle">
                    What people say about working with me
                </p>
            </div>

            <Swiper 
                className='container testimonials__container'
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={800}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
            >
                {testimonials.map(({ id, img, name, role, review, rating, company }) => (
                    <SwiperSlide key={id} className='testimonial'>
                        <div className="testimonial__content">
                            <div className="testimonial__header">
                                <div className='client__avatar'>
                                    <img src={img} alt={name} />
                                    <div className="client__avatar-ring"></div>
                                </div>
                                <div className="client__info">
                                    <h5 className='client__name'>
                                        {name}
                                        <MdVerified className="client__verified" />
                                    </h5>
                                    <small className='client__role'>{role}</small>
                                    <small className='client__company'>{company}</small>
                                </div>
                            </div>

                            <StarRating rating={rating} />

                            <div className="testimonial__quote">
                                <FaQuoteLeft className="quote-icon" />
                                <p className='client__review'>{review}</p>
                            </div>

                            <div className="testimonial__footer">
                                <div className="testimonial__dots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation */}
                <div className="swiper-button-prev">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </div>
                <div className="swiper-button-next">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                </div>
            </Swiper>
        </section>
    )
}

export default Testimonials;