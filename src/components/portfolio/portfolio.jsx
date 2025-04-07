import React from 'react';
import "./portfolio.css";
const Img1 ="/images/Todo.png"
const Img2 ="/images/WeatherApp.webp"
const Img3 ="/images/QuizApp.png"
const Img4 ="/images/QrCode.webp"
const Img5 ="/images/QuizApp.png"
const Img6 ="/images/QrCode.webp"

const data = [
    {
        id: 1,
        image: Img1,
        title: "Lorem ipsum dolor sit, amet consectetur",
        github: "https://github"
    },
    {
        id: 2,
        image: Img2,
        title: "Sed do eiusmod tempor incididunt ut labore",
        github: "https://github"
    },
    {
        id: 3,
        image: Img3,
        title: "Ut enim ad minim veniam, quis nostrud exercitation",
        github: "https://github"
    },
    {
        id: 4,
        image: Img4,
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        github: "https://github"
    },
    {
        id: 5,
        image: Img5,
        title: "Excepteur sint occaecat cupidatat non proident",
        github: "https://github"
    },
    {
        id: 6,
        image: Img6,
        title: "Sunt in culpa qui officia deserunt mollit anim",
        github: "https://github"
    }
];


const Portfolio =()=>{
    return(
        <>
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className='container portfolio__container'>
            {
    data.map(({ id, image, title, github }) => (
        <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </article>
    ))
}

            </div>
        </section>
        </>
    )
}
export default Portfolio;