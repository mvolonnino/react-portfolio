import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBLink,
} from "mdbreact";

function CardHeaderProfile(props) {
  return (
    <MDBContainer className="mt-3 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage className="img-fluid" src={props.img} />
            <MDBCardBody>
              <MDBCardTitle className="h2">Matt Volonnino</MDBCardTitle>
              <MDBCardText>Full Stack Web Developer</MDBCardText>
              <MDBCardText className="text-muted">
                JavaScript, ReactJS, HTML, CSS, NodeJS, Express, MongoDB, MySQL
              </MDBCardText>
              <MDBLink to="/about">
                <MDBBtn gradient="purple" rounded>
                  ABOUT ME
                </MDBBtn>
              </MDBLink>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CardHeaderProfile;
