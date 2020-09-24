// import React, { Component, useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBIcon,
// } from "mdbreact";

//

// function MyNavbar() {
//   return (
//     <Navbar bg="danger" variant="dark">
//       <Navbar.Brand href="/">Matt Volonnino</Navbar.Brand>
//       <Nav className="ml-auto">
//         <Nav.Link href="/aboutme">About Me</Nav.Link>
//         <p className="pipe">|</p>
//         <Nav.Link href="/projects">Epic Projects</Nav.Link>
//         <p className="pipe">|</p>
//         <Nav.Link href="/contactme">Contact Me</Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// }

// export default MyNavbar;

import React from "react";
import { MDBNav, MDBNavLink } from "mdbreact";
import "./style.css";
function MyNavbar() {
  return (
    <MDBNav className="font-weight-bold py-4 px-2 mb-4 shadow-md bg-image">
      <MDBNavLink className="white-text" active to="/">
        Profile
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/about">
        About Me
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/projects">
        Epic Projects
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/contact">
        Contact Me
      </MDBNavLink>
      <a className="white-text ml-auto pt-2" target="_blank" rel="noopener noreferrer" href="http://github.com/mvolonnino">
        <i className="fab fa-github white-text">GitHub</i>
      </a>
      {/* <a className="white-text ml-auto pt-2" target="_blank" href="http://linkedin.com">
        <i className="fab fa-linkedin white-text">LinkedIn</i>
      </a> */}
    </MDBNav>
  );
}

export default MyNavbar;
