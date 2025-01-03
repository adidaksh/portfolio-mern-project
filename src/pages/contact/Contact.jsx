import React from "react";

import { toast } from 'react-toastify';
import "../../pages/contact/contact.css";
import contact from "../../images/cnct.png";
import {  FaFacebook, FaLinkedin,  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import { motion } from 'framer-motion';






const Contact = () => {

  const [ name, setName] = useState("");
  const [ email, setEmail] = useState("");
  const [ msg, setMessage] = useState("");

// handel submite button

const handleSubmite = (e) =>{
  e.preventDefault();
  try {
    if (!name || !email || !msg){
      toast.error("Please provide all feilds");
    }
    if (name && email && msg){
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    };
  } catch (error) {
    console.log(error);
  }
};



  return (
    <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  > 
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={contact} alt="contact" className="images" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h5>Contact With 
                      <a href="https://www.linkedin.com/in/aditya-kumar0631/"  className="link-red">
                      <FaLinkedin  color="blue" size={30} className="ms-2"/></a>
                     
                     <a href="https://github.com/adidaksh?tab=repositories" className="link-red">
                     <FaGithub color="black" size={32} className="ms-2"/>
                     </a>
                      
                      <a href="https://www.linkedin.com/in/aditya-kumar0631" className="link-red"><FaFacebook  color="blue" size={32} className="ms-2"/>
                      </a>
                    </h5>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}


                    />
                    <textarea
                      type="massage"
                      name="massage"
                      placeholder="Write your massage"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMessage(e.target.value)}

                    />

                    <div className="row px-3 mb-4">
                      <button className="button" type="submit" onClick={handleSubmite}>
                        {" "}
                        Send Massage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Contact;
