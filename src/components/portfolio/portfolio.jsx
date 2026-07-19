import React, { useRef, useEffect, useState } from "react";
import "./portfolio.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Img1 = "/images/Itexams.png";
const Img2 = "/images/Weather-Disease.png";
const Img3 = "/images/Airbnb.png";
const Img4 = "/images/Learnx.png";
const Img5 = "/images/QuizApp.png";
const Img6 = "/images/QrCode.webp";
const Img7 = "/images/LeetCode.png";
const Img8 = "/images/sql.png";
const Img9 = "/images/FoodApp.png";
const Img10 = "/images/Revoge.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Online IT Exams Preparation Platform",
    tech: [
      "MERN Stack",
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "REST API",
      "JWT Authentication",
      "Material UI",
      "React Router",
      "Redux Toolkit",
      "GitHub Actions",
    ],
    LiveProject: "https://itexams.vercel.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "AI-Powered Weather Health Prediction System",
    tech: [
      "React js",
      "Node.js",
      "Express js",
      "ML",
      "Python",
      "FastAPI",
      "Weather DataSets",
      "OpenWeatherMap API",
      "Gemini API",
      "Chart.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
    LiveProject: "https://weather-disease-detection.vercel.app/",
  },
  {
    id: 3,
    image: Img3,
    title: "Airbnb-Inspired Full-Stack Web Application",
    tech: [
      "EJS",
      "Node.js",
      "Express js",
      "MongoDB",
      "JWT Authentication",
      "REST API",
      "Responsive Design",
    ],
    github: "https://github.com/MuhammadMudassarYounas/Airbnb-Website",
  },
  {
    id: 4,
    image: Img4,
    title: "LearnX Platform",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "JWT Authentication",
      "REST API",
        "Material UI",

    ],
    LiveProject: "https://learnx-platform-xi.vercel.app/",
  },
  {
    id: 5,
    image: Img9,
    title: "Food Delivery App Full Stack",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redux Toolkit",
        "JWT Authentication",
        "REST API",
        "Material UI",
    ],
    LiveProject: "https://food-delivery-app-mudassar.netlify.app/",
  },
  {
    id: 6,
    image: Img10,
    title: "Revoge 3D: Virtual Try-On System",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Python",
      "Machine Learning",
      "Three.js",
    ],
    LiveProject: "https://revouge-project.netlify.app/",
  },
  {
    id: 7,
    image: Img5,
    title: "Quiz App",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design","Score Tracking","Quiz Timer"],
    github:
      "https://github.com/MuhammadMudassarYounas/Quiz-App",
  },
  {
    id: 8,
    image: Img6,
    title: "QR Code Generator",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design","QR Code Generation","Download QR Code"],
    github:
      "https://github.com/MuhammadMudassarYounas/QR-code",
  },
  {
    id: 9,
    image: Img7,
    title: "LeetCode Python Solutions",
    tech: ["Python", "Algorithms", "Data Structures", "Problem Solving", "LeetCode"],
    github:
      "https://github.com/MuhammadMudassarYounas/leetcode-solutions-python",
  },
  {
    id: 10,
    image: Img8,
    title: "SQL LeetCode Solutions",
    tech: ["SQL", "Database", "Query Optimization"," LeetCode", "Problem Solving", "Data Manipulation"],
    github:
      "https://github.com/MuhammadMudassarYounas/SQL_50_Leetcode_Problem-",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

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

  const displayedProjects = showAll ? data : data.slice(0, 6);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={isVisible ? "portfolio--visible" : ""}
    >
      <div className="section__header">
        <span className="section__eyebrow">My Recent Work</span>
        <h2 className="section__title">Featured Projects</h2>
      </div>

      <div className="container portfolio__container">
        {displayedProjects.map(
          ({ id, image, title, tech, github, LiveProject }, index) => (
            <article
              key={id}
              className="portfolio__item"
              style={{ "--animation-order": index + 1 }}
            >
              <div className="portfolio__item-image-wrapper">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
              </div>

              <div className="portfolio__item-content">
                <h3>{title}</h3>

                <div className="portfolio__item-tech">
                  {tech.map((item, i) => (
                    <span key={i} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="portfolio__buttons">
                  {LiveProject && (
                    <a
                      href={LiveProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>

      <div className="portfolio__more">
        {!showAll ? (
          <button
            className="btn btn-primary"
            onClick={() => setShowAll(true)}
          >
            See More Projects
          </button>
        ) : (
          <button
            className="btn btn-outline"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;