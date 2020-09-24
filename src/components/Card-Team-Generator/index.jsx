import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

// import "./style.css";
import MyCarousel from "../Carousel";

const TeamProfileCardProject = (props) => {
  // console.log("(HeroCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse className="h-100">
        <MyCarousel img={props.img} />
        <MDBCardBody cascade className="text-center">
          <hr className="blueline"></hr>
          <MDBCardTitle>Team Profile Generator</MDBCardTitle>
          <h5 className="indigo-text">
            <strong>Build a Team using Node</strong>
          </h5>
          <MDBCardText>
            This project allows a user to build a team based on the user inputs using NodeJS. It then outputs an HTML file
            displaying the team that the user had just built. This is not deployed, as it primarily NodeJS. Link to GitHub
            repository below. <em>Languages Used: NodJS, JavaScript, HTML, CSS</em>
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/Team_Profile_Generator"
            // target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default TeamProfileCardProject;
