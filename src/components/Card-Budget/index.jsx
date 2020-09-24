import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBCardImage } from "mdbreact";

import MyCarousel from "../Carousel";

const BudgetCardProject = (props) => {
  // console.log("(BudgetCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse>
        <MDBCardImage className="img-fluid rounded" src={props.img[0]} waves />
        <MDBCardBody cascade className="text-center">
          <hr className="blueline"></hr>
          <MDBCardTitle>Budget Tracker</MDBCardTitle>
          <h5 className="blue-text">
            <strong>Keep Track of your Expenses</strong>
          </h5>
          <MDBCardText>
            This project allows the user to keep track of their finances. It uses a mongoAtlas database connected through
            Heroku. It also offers offline functionality by utlizing the IndexedDB in Application Storage. Click below to go
            to GitHub repository or to the deployed link.
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/budget_tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://bdgt-trcker.herokuapp.com/"
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

export default BudgetCardProject;
