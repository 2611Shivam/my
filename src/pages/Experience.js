import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ST. Joseph School, Dumka, Jharkhand
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Matriculation Degree
          </h4>
          <p> Completed with 90% </p>
          <p> Programming skill gained- JAVA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DAV Public School, Koylanagar, Dhanbad, Jharkhand
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Intermediate Degree
          </h4>
          <p> Completed with 74% </p>
          <p> Programming skill gained- JAVA</p>
          <p> Database skill gained- MYSQL</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Birla Institute of Technology, Mesra, Ranchi, Jharkhand
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> physics </p>
          <p> Completed with 78% </p>
          <p>Programming skills gained- JAVA(sem-III)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Maharshi Dayanand University , Rohtak , Haryana
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Masters Degree</h4>
          <p> physics </p>
          <p> Completed with 73% </p>
          <p>Programming skills gained- Fortran , Matlab(sem-III&IV)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>Completed courses on HTML, CSS & Javascript</p>
          <p>Developed the FrontEnd infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>Completed course on ReactJS</p>
          <p>
            With basic understanding of html css javascript React, Router
            completed 3 projects, including this current portfolio website
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
