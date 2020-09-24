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

// import fullStack from "./img/full-stack.png";
import fullStackPurple from "./img/full-stack-purple.png";

function Profile() {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage className="img-fluid" src={fullStackPurple} />
            <MDBCardBody>
              <MDBCardTitle className="h3">Matt Volonnino</MDBCardTitle>
              <MDBCardText>Full Stack Web Developer</MDBCardText>
              <MDBCardText className="text-muted">
                JavaScript, ReactJS, HTML, CSS, NodeJS, Express, MongoDB, MySQL
              </MDBCardText>
              <MDBLink to="/react-portfolio/about">
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

export default Profile;
