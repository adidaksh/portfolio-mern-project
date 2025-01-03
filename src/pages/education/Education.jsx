import React from 'react';
import "../education/education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool } from "react-icons/md";



const Education = () => {
  return (
 
    <>
    <div className="education" id="education">
    <h2 className=' col-12 mt-3 mb-1 text-center'>EDUCATION</h2>
    <hr />
    

    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool /> }
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">PLJL Rastogi Inter College</h4>
    <p>
      Mathmatics
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool /> }
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">AKTU University </h4>
    <p>
    Computer science and engineering (CSE) 
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>

    </div>
    </>
  )
}

export default Education