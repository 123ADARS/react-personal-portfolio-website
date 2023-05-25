import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi,My Name is Adarsh Singh.</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/adarsh-singh6861/"> <LinkedInIcon /></a>
    
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">  <EmailIcon /></a>
          <a href="https://github.com/123ADARS"><GithubIcon /></a>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, JavaScript, ReactJS, NPM.
            </span>
          </li>
          <li className="item">
            <h2>Back-End Beginner</h2>
            <span>
              NodeJS, ExpressJS, MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
