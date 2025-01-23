import React from "react";
import "./about.css";
import image from "../../images/about1.png";
import { motion } from 'framer-motion';


const About = () => {
  return (
    <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
      <div className="about bg-dark" id="about">
        <div className="row">
          <div className="col-md-6 about-img">
            <img src={image} alt="profile-pic" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About me </h1>
            <p>
              As a passionate and dedicated front-end web developer, "Actively
              Seeking Entry-Level Positions" I am eager to bring my skills in
              HTML, CSS, JavaScript, React and responsive design to a dynamic
              and innovative team. Recently graduated with a degree in B.tech
              (CSE) from Dr. A. P. J. Abdul Kalam Technical University, Lucknow,
              I have honed my abilities through various projects and internships
              that have equipped me with a solid foundation in front-end web
              development and a keen eye for detail. Key Skills: HTML, CSS,
              JavaScript: Strong understanding of JavaScript Frameworks &
              Libraries: React.js, Bootstrap. Back-End Development: Node.js,
              Express, and databases such as MongoDB.
            </p>
          </div>
        </div>
      </div>

      </motion.div>
    </>
  );
};

export default About;
