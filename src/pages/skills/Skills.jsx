import React from 'react';
import "./skills.css";
import { TechStack } from '../../Utils/TechStack';
import {motion} from 'framer-motion';
const skills = () => {
  return (
   <>
   <motion.div
    animate={{ rotate: 360 }}
    transition={{ type: 'spring', velocity: 2 }}
  > 
   <div className=" techStack" id='skill'>
    <h2 className=' col-12 mt-2 mb-1 text-center'>TECHNICAL SKILLS</h2> 
    <hr />
    <p className='pb-3 text-center'>👉 Including programming languages, frameworks, database, front-end  and backend tools, and APIs</p> 


   <div className="row ">

   
     {TechStack.map(tech =>(
       <div key={tech._id} className="col-md-4">
        <div className="card card-skill m-2">
            <div className="card-content">
                <div className="card-body ">
                    <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                        <tech.icon className='tech-icon'/>
                        </div>

                        <div className="media-body">
                        <h5>{tech.name}</h5>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
       </div>
    ))}
   

   </div>
   
   </div>

   </motion.div>
   </>
  )
}

export default skills
