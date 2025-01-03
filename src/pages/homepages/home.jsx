import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../doc/aditya_daksh.pdf";


import "./home.css";
const Home = () =>{
    return (
         <>
        <div className="home-container"  id="home">
            <div className="container home-content">
             <h2>Hii 👋 I am Aditya  </h2>
                <h1>
                  <Typewriter 
                  options={
                    {
                        strings:[
                            "Front_End developer !",
                            "FullStack web developer!",
                             ],
                        autoStart: true,
                        loop:true,
                    }
                  } />
                </h1>

              
                <div className="home-button">
                    <a  className="btn btn-hire"
                     href="https://api.whatsapp.com/send?phone=8218555257"
                     rel="noreferrer"
                     target="blank" 
                     > Hire Me !</a>
                      <a className="btn btn-cv" href={Resume} download="aditya-kumar.pdf">My Resume</a>

                </div>

                

            </div>
        </div>
        </>
        
        
    )
}

export default Home ;