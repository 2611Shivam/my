import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hii, My Name is Shivam </h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating</p>
          <a
            href="https://www.linkedin.com/in/kumar-shivam-2336bb215/"
            target="blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/2611Shivam" target="blank">
            <GitHubIcon />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
            {" "}
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Designing</h2>
            <span>Bootstrap, TailwindCSS, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JAVA, Javascript</span>
          </li>
          <li className="item">
            <h2>Databases</h2>
            <span>MYSQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
