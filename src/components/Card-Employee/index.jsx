import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

// import "./style.css";
import MyCarousel from "../Carousel";

const EmployeeCardProject = (props) => {
  // console.log("(HeroCardProject) props", props);
  return (
    <MDBCol className="col-md-6">
      <MDBCard reverse>
        <MyCarousel img={props.img} />
        <MDBCardBody cascade className="text-center">
          <hr className="blueline"></hr>
          <MDBCardTitle>Employee Directory</MDBCardTitle>
          <h5 className="indigo-text">
            <strong>Search for Employees</strong>
          </h5>
          <MDBCardText>
            This project utlizes the randomegenerator API to have access to an "x" number of "employees" to fill the
            directory. Search the directory for matches based on any of the columns.{" "}
            <em>Languages Used: ReactJS, JavaScript, HTML, CSS</em>
          </MDBCardText>
          <a
            href="https://github.com/mvolonnino/directory-app"
            target="_blank"
            rel="noopener noreferrer"
            className="icons-sm li-ic ml-1"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://mvolonnino.github.io/directory-app/"
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

export default EmployeeCardProject;
