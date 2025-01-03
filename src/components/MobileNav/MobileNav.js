import React from 'react';
import './MobileNav.css';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import {
   FcAbout,
   FcBiotech,
   FcBusinessContact,
   FcHome,
   FcReadingEbook,
   FcVideoProjector,
 } from "react-icons/fc";
 import { Link } from "react-scroll";
import { AiOutlineMenuFold } from 'react-icons/ai';


const MobileNav = () => {
   const [open, setOpen] = useState(false)
   // handle open 

   const handleOpen = () => {
      setOpen(!open);
   };
   // handleclick 

   const handleClick =()=>{
setOpen(false);
   };
  return (
  <>
     <div className=' mobile-nav'>
        <div className='mobile-nav-header'>
          {open ? (<AiOutlineMenuFold size={30}className='mobile-nav-icon' onClick={handleOpen}/>)
          :(<FiMenu  size={30}className='mobile-nav-icon'  onClick={handleOpen}/>)}
         <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
     {open && (
      <div className='mobile-nav-menu'>
      <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link active">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClick}
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
                    duration={100} onClick={handleClick}>
                     
                      <FcAbout />
                      About
                    </Link>
                  
                </div>
                <div className="nav-link">
                 <Link to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                      onClick={handleClick}>
                       <FcReadingEbook />
                       Education 
                    </Link>
                 
                </div>
  
                <div className="nav-link">
                 <Link to="skill"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClick} > 

                    <FcBiotech />
                  Tech Stack</Link>
                 
                </div>
  
                <div className="nav-link">
                 <Link  to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClick}> <FcVideoProjector />
                  Project</Link>
                 
                </div>
  
                <div className="nav-link">
                <Link to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100} 
                    onClick={handleClick}>  
                    <FcBusinessContact />
                     Contact
                  </Link>
                </div>
              </div>
            </div>
      </div>
     )}

     </div>

  </>
  )
}

export default MobileNav