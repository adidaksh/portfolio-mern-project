import React from "react";
import "./Menus.css";
import { motion } from 'framer-motion';
import profile from "../../images/profile.png";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcContacts,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

const menu = ({ toggel }) => {
  return (
    <>
      {toggel ? (
        <>
       <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  > <div>
            <div className="navbar-profile-pic">
              <img src={profile} alt="profile-pic" />
            </div>
          </div></motion.div>
         
          <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  > 

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link active">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                   Home
                </Link>
              </div>
              <div className="nav-link">
               <Link to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                    <FcAbout />
                    About
                  </Link>
                
              </div>
              <div className="nav-link">
               <Link to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                     <FcReadingEbook />
                     Education 
                  </Link>
               
              </div>

              <div className="nav-link">
               <Link to="skill"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100} > <FcBiotech />
                Tech Stack</Link>
               
              </div>

              <div className="nav-link">
               <Link  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}> <FcVideoProjector />
                Projects</Link>
               
              </div>

              <div className="nav-link">
              <Link to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100} >  
                  <FcBusinessContact />
                   Contact
                </Link>
              </div>
            </div>
          </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcHome />
              </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcAbout/>
              </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcReadingEbook/>
              </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcBiotech/>
              </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcVideoProjector />
              </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  ><FcContacts />
              </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default menu;
