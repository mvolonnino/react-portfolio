import React from "react";
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

import "./style.css";

function Jumbotron(props) {
  return (
    <div className="row">
      <div className="col">
        <MDBCard color="white" text="black" className="text-center mb-2">
          <MDBCardBody>
            <figure className="image-wrapper float-left mr-3 mb-3">
              <img
                src={props.img}
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
              about 4 days to brainstorm, code, and complete, with the 5th day being presentation day. I was the project
              manager for 2 projects, including the Pokemon Search and SuperHero Universe applications, leading a team of 4
              and 3 people respectively. Check out the Epic Projects tab above to see some of my projects.
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
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Jumbotron;
