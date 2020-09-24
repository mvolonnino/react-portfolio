import React from "react";
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";

import "./style.css";

function MyNavbar() {
  return (
    <MDBNav className="font-weight-bold py-4 px-2 mb-4 shadow-md bg-image">
      <MDBNavLink
        className="rounded main-nav"
        activeClassName="main-nav-active"
        // onClick={() => toggleActive("1")}
        to="/react-portfolio"
      >
        Profile
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="rounded about-nav "
        activeClassName="about-nav-active"
        // onClick={() => toggleActive("2")}
        to="/about"
      >
        About
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="rounded projects-nav"
        activeClassName="projects-nav-active"
        // onClick={() => toggleActive("3")}
        to="/projects"
      >
        Epic Projects
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="rounded contact-nav"
        activeClassName="contact-nav-active"
        // onClick={() => toggleActive("4")}
        to="/contact"
      >
        Contact
      </MDBNavLink>
      <MDBNavItem className="ml-auto pt-2 mr-2">
        <a className="ml-auto pt-2" target="_blank" rel="noopener noreferrer" href="http://github.com/mvolonnino">
          <i className="fab fa-github white-text mr-2"> GitHub</i>
        </a>
        <a className="ml-auto pt-2" target="_blank" rel="noopener noreferrer" href="http://linkedin.com">
          <i className="fab fa-linkedin white-text mr-2"> Linked</i>
        </a>
      </MDBNavItem>
    </MDBNav>
  );
}

export default MyNavbar;

// import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler } from "mdbreact";

// class MyNavbar extends Component {
//   state = {
//     collapse1: false,
//     collapseID: "",
//   };

//   toggleCollapse = (collapseID) => () => {
//     this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : "" }));
//   };

//   toggleSingleCollapse = (collapseId) => {
//     this.setState({
//       ...this.state,
//       [collapseId]: !this.state[collapseId],
//     });
//   };

//   render() {
//     return (
//       <MDBNavbar style={{ marginBottom: "10px" }}>
//         <MDBContainer>
//           <MDBNavLink className="white-text" to="/">
//             <h4>Profile</h4>
//           </MDBNavLink>
//           <MDBHamburgerToggler
//             className="shadow-none"
//             color="white"
//             id="hamburger1"
//             onClick={() => this.toggleSingleCollapse("collapse1")}
//           />
//           <MDBCollapse isOpen={this.state.collapse1} navbar>
//             <MDBNavbarNav left>
//               <MDBNavItem>
//                 <MDBNavLink className="white-text" to="/about">
//                   About
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink className="white-text" to="/projects">
//                   Epic Projects
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink className="white-text" to="#!">
//                   Contact
//                 </MDBNavLink>
//               </MDBNavItem>
//               <a className="white-text pt-2" href="http://github.com/mvolonnino">
//                 <i className="fab fa-github white-text mr-2"> GitHub</i>
//               </a>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     );
//   }
// }

// export default MyNavbar;
