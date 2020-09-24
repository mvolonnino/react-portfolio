import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

function AboutCardHeader() {
  return (
    <MDBRow className="justify-content-center">
      <MDBCol md="12" className="mb-4">
        <MDBCard color="white" text="black" className="text-center">
          <MDBCardBody>
            <hr className="blueline mt-0"></hr>
            <h1 className="display-4">About Me</h1>
            <p className="text-muted">Welcome to my Jourey</p>
            <hr className="redline mb-0"></hr>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default AboutCardHeader;
