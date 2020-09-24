import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

import "./style.css";
import MyCarousel from "../Carousel";

const HeroCardProject = (props) => {
  // console.log("(HeroCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse>
        <MyCarousel img={props.img} />
        <MDBCardBody cascade className="text-center">
          <hr className="redline"></hr>
          <MDBCardTitle>SuperHero Project</MDBCardTitle>
          <h5 className="red-text">
            <strong>Assemble Your Universe</strong>
          </h5>
          <MDBCardText>
            This project utilizes the Superhero API to have access to over 700 comic book characts.Search through them and
            add them to your collection and battle villains to save the universe!{" "}
            <em>Languages Used: JavaScript, NodeJS, Express, MySQL, HTML, CSS</em>
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/superhero_team"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://superhero-team.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-2"
          >
            <MDBIcon icon="external-link-alt" />
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default HeroCardProject;
