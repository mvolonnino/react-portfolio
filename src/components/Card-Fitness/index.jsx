import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

import MyCarousel from "../Carousel";

const FitnessCardProject = (props) => {
  // console.log("(BudgetCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse className="h-100">
        <MyCarousel img={props.img} />
        <MDBCardBody cascade className="text-center">
          <hr className="redline"></hr>
          <MDBCardTitle>Fitness Tracker</MDBCardTitle>
          <h5 className="red-text">
            <strong>Record Your Workouts</strong>
          </h5>
          <MDBCardText>
            This project allows the user to keep track of their workouts throughout the day and stores them in a MongoDB
            database. It has a dashboard page that will show the user how long they worked out for and pounds lifted
            throughout the week. <em>Languages Used: JavaScript, Express, MongoDB, HTML, CSS</em>
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/fitness_tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://workout-and-record.herokuapp.com/"
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

export default FitnessCardProject;
