import React from 'react';
import "./Testimonials.css";

const AVTR1 = "/images/abdulahad.jpg";
const AVTR2 = "/images/naeem.jpg"
const AVTR3 = "/images/faisal.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = [
    {
        id: 1,
        img: AVTR1,
        name: "Abdulahad",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed a autem? Doloribus, laborum, adipisci repellat placeat itaque pariatur expedita reprehenderit consectetur hic dolo"
    },
    {
        id: 2,
        img: AVTR2,
        name: "Naeem Atif",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed a autem? Doloribus, laborum, adipisci repellat placeat itaque pariatur expedita reprehenderit consectetur hic dolo"
    },
    {
        id: 3,
        img: AVTR3,
        name: "Faisal Faiz",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed a autem? Doloribus, laborum, adipisci repellat placeat itaque pariatur expedita reprehenderit consectetur hic dolo"
    }
];



const Testimonials = () => {
    return (
        <>
            <section id='Testimonials'>
                <h5>Review from Members</h5>
                <h2>Testimonials</h2>

                <Swiper className='container testimonials__container'
                    modules={[ Pagination,]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {testimonials.map(({ id, img, name, review }) => (
                        <SwiperSlide key={id} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={img} alt={name} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'></small>
                            <p>{review}</p>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>
        </>
    )
}
export default Testimonials;