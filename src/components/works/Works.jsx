import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./works.scss";
  
export default function Works() {
const location = useLocation();
  
  useEffect(() => {
    // Scroll to the top of the component when it mounts or location changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
  const data = [
    {
      id: "1",
        title: "React Social Media Application",
        img: `${process.env.PUBLIC_URL}/assets/project1.jpg`,
        desc:
          "A full-featured social media platform built using the MERN stack, allowing users to interact in real-time through posts, comments, and likes. Integrated secure authentication and dynamic user interface for a seamless experience.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Axios"],
    },
    {
      id: "2",
      title: "E-Commerce Website",
      img: `${process.env.PUBLIC_URL}/assets/project2.png`,
      desc:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MySql"],
      },
      {
        id: "3",
        title: "Portfolio Website",
        img: `${process.env.PUBLIC_URL}/assets/project3.png`,
        desc: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind"],
      },
      {
        id: "4",
        title: "Anomaly Detection System",
        img: `${process.env.PUBLIC_URL}/assets/project4.jpg`,
        desc:
          "Developed an anomaly detection system using Z-score analysis to monitor fridge door activity without additional hardware.",
        technologies: ["Python", "Z-score analysis", "Data Science", "Machine Learning"],
      },
  ];
    
  
    return (
      <div className="works" id="works">
        <h1>Projects</h1>
        <div className="projects-container">
          {data.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <h4>Technologies:</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
