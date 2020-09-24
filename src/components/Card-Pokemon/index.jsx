import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

import MyCarousel from "../Carousel";

const PokemonCardProject = (props) => {
  // console.log("(PokemonCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse className="h-100">
        <MyCarousel img={props.img} />
        <MDBCardBody cascade className="text-center">
          <hr className="redline"></hr>
          <MDBCardTitle>Pokedex Search</MDBCardTitle>
          <h5 className="red-text">
            <strong>Search Pokemon & Related Youtube Videos</strong>
          </h5>
          <MDBCardText>
            This project utlizes the poke API and YouTube API to search for a specific pokemon and get information on it and
            the top related YouTube videos. It also only allows for a total of 6 cards to be shown like in the Pokemon video
            games, as a team of 6 would be all that you could carry! <em>Languages Used: JavaScript, HTML, CSS</em>
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://mvolonnino.github.io/project1/"
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

export default PokemonCardProject;
