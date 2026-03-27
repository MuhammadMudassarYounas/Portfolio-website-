import React, { useRef, useEffect, useState } from 'react';
import "./Testimonials.css";

const AVTR1 = "/images/abdulahad.jpg";
const AVTR2 = "/images/naeem.jpg";
const AVTR3 = "/images/faisal.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        img: AVTR1,
        name: "Abdulahad",
        role: "Project Manager",
        review: "Mudassar is an exceptional Full Stack Developer. He transformed our outdated platform into a lightning-fast, modern web application using React and Node.js. His attention to detail, especially in mobile responsiveness and UI design, is unmatched."
    },
    {
        id: 2,
        img: AVTR2,
        name: "Naeem Atif",
        role: "Startup Founder",
        review: "Working with Mudassar was a fantastic experience. He has a deep understanding of frontend aesthetics and robust backend architecture. He delivered our project ahead of schedule, with clean and maintainable code."
    },
    {
        id: 3,
        img: AVTR3,
        name: "Faisal Faiz",
        role: "Tech Lead",
        review: "I highly recommend Mudassar for any complex web development needs. His proficiency in modern frameworks like Next.js helped us scale our product flawlessly. He is proactive, communicative, and truly cares about success."
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section id='Testimonials' ref={sectionRef} className={isVisible ? "testimonials--visible" : ""}>
            <div className="testimonials__header">
                <h5 className="testimonials__subtitle">Review from Clients</h5>
                <h2 className="testimonials__title">Testimonials</h2>
                <div className="testimonials__title-line"></div>
            </div>

            <Swiper 
                className='container testimonials__container'
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {testimonials.map(({ id, img, name, role, review }) => (
                    <SwiperSlide key={id} className='testimonial'>
                        <div className="testimonial__content">
                            <div className='client__avatar'>
                                <img src={img} alt={name} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__role'>{role}</small>
                            <div className="quote-icon">"</div>
                            <p className='client__review'>{review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials;