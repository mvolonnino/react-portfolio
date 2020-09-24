import React from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

import "./style.css";
import img from "./aboutme.png";

function Jumbotron() {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1 className="display-4">About Me</h1>
        <hr className="redline"></hr>
        <div className="row">
          <div className="col">
            <figure className="image-wrapper float-left mr-3 mb-3">
              <img
                src={img}
                className="img-fluid img-thumbnail img-responsive customImg"
                alt="Matt Volonnino Portrait"
              ></img>
            </figure>
            <p>
              My name is Matt Volonnino. I graduated from Plymouth State University in May of 2019. I have always had a love
              for coding since my college years. I was able to take a couple coding classes but was not able to fully commit
              as I was getting a Business Adminstration degree and playing Division III Ice Hockey while working for a
              restaurant called Merlands in New Hampshire. My first job after college was working in the billing department
              for Chubb Insurance and I knew that this was not the right job for me. That is why I took the leap and did the
              Rutgers Coding Bootcamp to get my Full Stack Development Certificate, and so glad that I did!
              <br />
              <br />
              In the long, grueling 3 months of the Full-Stack Coding BootCamp, I have completed many projects and
              applications. I have gained real-life experience in having to create my own full-stack applications from the
              ground up while hitting my due dates and learning new technologies. For the projects, we would normally have
              about 4 days to brainstorm, code, and complete by presentation day, which was always tough but rewarding as
              well. I was the project manager for 2 projects, including the Pokemon Search and SuperHero Universe
              applications, leading a team of 4 and 3 people respectively.
            </p>
            <p>Below are links to my GitHub repository and LinkedIn channel.</p>
            <MDBBtn
              href="https://www.linkedin.com/in/matthew-volonnino-30076a1b1/"
              target="_blank"
              social="li"
              gradient="mean-fruit"
            >
              <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
            </MDBBtn>
            <MDBBtn href="http://github.com/mvolonnino" target="_blank" social="git" gradient="peach">
              <MDBIcon fab icon="github" className="pr-1" /> Github
            </MDBBtn>
          </div>
        </div>
      </div>
      <hr className="bg-image"></hr>
    </div>
  );
}

export default Jumbotron;
