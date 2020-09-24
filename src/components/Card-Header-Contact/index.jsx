import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";

const CardHeaderContact = () => {
  return (
    <MDBRow className="justify-content-center">
      <MDBCol md="12" className="mb-4">
        <MDBCard color="white" text="black" className="text-center">
          <MDBCardBody>
            <hr className="blueline mt-0"></hr>
            <h1 className="display-4">Contact Me</h1>
            <p className="text-muted">
              Fill out the form below and click send to reach out to my email
            </p>
            <hr className="redline mb-0"></hr>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardHeaderContact;
