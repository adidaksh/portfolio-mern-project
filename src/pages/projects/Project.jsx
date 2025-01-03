import React from "react";
import "./projects.css";
import weather from "../../images/wth4.jpg";
import crud from "../../images/CRUD.jpeg";
import portfolio from"../../images/ptfl.jpg";
import miniproject from "../../images/react.jpeg"
import{ motion} from 'framer-motion';
const Project = () => {
  return (
    <>
        <motion.div animate={{ x: [0, 100, 0] }} >
  

      <div className=" projects" id="project">
        <h2 className=" col-12 mt-2 mb-1 text-center text-uppercase">
          {""}
          top recent projects
        </h2>
        <hr/>
        <p className="pb-3 text-center">
          Here are my top 3 most recent projects with lives links and source
          code{" "}
        </p>

       
        <div className="row mt-4" id="ads">
        <div className="col-md-4 ">
            <div className="card  pop-up rounded">
              <div className="card-image">
                <img src={weather} alt="project" />
              </div>

              <div className="card-body ">
                <div className="ad-title m-auto">
                  <h5 className="text-center app-title  ">
                    Weather Appliction
                  </h5>
                  <p className="app-deatail mt-2">
                    This project is a fully responsive real-time weather
                    application built using HTML, CSS, JavaScript, and React ...
                  </p>
                  <div className="card-image-overly m-auto mb-1">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">Javascripte</span>
                  <span className="card-detail-badge">React Js</span>
                  <span className="card-detail-badge">APIs</span>

                  </div>
                </div>
              </div>
              <div className="card-image-overly m-auto mb-3"></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card pop-up rounded">
              <div className="card-image">
                <img src={portfolio} alt="project" />
              </div>

              <div className="card-body ">
                <div className="ad-title m-auto">
                  <h5 className="text-center app-title  ">
                    Portfolio Appliction
                  </h5>
                  <p className="app-deatail mt-2">
                   This application is showcase of my skills and projects, developed using modern web technologies including HTML, CSS, React, Node.js, Express.js...
                  </p>
                  <div className="card-image-overly m-auto mb-1">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">React Js</span>
                  <span className="card-detail-badge">Node Js</span>
                  <span className="card-detail-badge">Express Js</span>
                  </div>
                </div>
              </div>
              <div className="card-image-overly m-auto mb-3"></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card pop-up rounded">
              <div className="card-image">
                <img src={crud} alt="project" />
              </div>

              <div className="card-body ">
                <div className="ad-title m-auto">
                  <h5 className="text-center app-title  ">
                    Crud Appliction
                  </h5>
                  <p className="app-deatail mt-2">
                  This project is a fully functional CRUD (Create, Read, Update, Delete) application built using HTML, CSS,  JavaScript, and React js...</p>
                  <div className="card-image-overly m-auto mb-1">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">Javascripte</span>
                  <span className="card-detail-badge">React Js</span>
                  <span className="card-detail-badge">Node Js</span>


                </div>
                </div>
              </div>
              <div className="card-image-overly m-auto mb-3"></div>
            </div>
          </div>

       

          <div className="col-md-4 mt-3">
            <div className="card pop-up rounded">
              <div className="card-image">
                <img src={miniproject} alt="project" />
              </div>

              <div className="card-body ">
                <div className="ad-title m-auto">
                  <h5 className="text-center app-title  ">
                   React Mini Projects
                  </h5>
                  <p className="app-deatail mt-2">
                  These projects highlight your React development skills, API integration, state management, and responsive design...
                  </p>
                  <div className="card-image-overly m-auto mb-1">
                  <span className="card-detail-badge">Html5</span>
                  <span className="card-detail-badge">Css3</span>
                  <span className="card-detail-badge">BootStrap</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">React Js</span>
                  </div>
                </div>
              </div>
              <div className="card-image-overly m-auto mb-3"></div>
            </div>
          </div>
        </div>

    </div>

      </motion.div>

    </>
  );
};

export default Project;
