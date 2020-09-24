import React from "react";
import Jumbotron from "../../components/Jumbotron";
import AboutCardHeader from "../../components/Card-Header-About";

import me from "./img/aboutme.png";

function AboutMe() {
  return (
    <div className="container">
      <AboutCardHeader />
      <Jumbotron img={me} />
      <br></br>
    </div>
  );
}

export default AboutMe;
