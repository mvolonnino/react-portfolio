import React, { useState } from "react";
import { MDBNav, MDBNavLink } from "mdbreact";

import "./style.css";

function MyNavbar() {
  const [active, setActive] = useState({
    activeItem: "1",
  });

  function toggleActive(tab) {
    if (active.activeItem !== tab) {
      setActive({
        activeItem: tab,
      });
    }
  }
  return (
    <MDBNav className="font-weight-bold py-4 px-2 mb-4 shadow-md bg-image">
      <MDBNavLink
        className="white-text rounded"
        active={active.activeItem === ""}
        onClick={() => toggleActive("1")}
        to="/react-portfolio"
      >
        Profile
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="white-text rounded"
        active={active.activeItem === "2"}
        onClick={() => toggleActive("2")}
        to="/react-portfolio/about"
      >
        About
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="white-text rounded"
        active={active.activeItem === "3"}
        onClick={() => toggleActive("3")}
        to="/react-portfolio/projects"
      >
        Epic Projects
      </MDBNavLink>
      <p className="pipe">|</p>
      <MDBNavLink
        className="white-text rounded"
        active={active.activeItem === "4"}
        onClick={() => toggleActive("4")}
        to="/react-portfolio/contact"
      >
        Contact
      </MDBNavLink>
      <a className="white-text ml-auto pt-2" target="_blank" rel="noopener noreferrer" href="http://github.com/mvolonnino">
        <i className="fab fa-github white-text mr-2"></i>
      </a>
      {/* <a className="white-text ml-auto pt-2" target="_blank" href="http://linkedin.com">
        <i className="fab fa-linkedin white-text">LinkedIn</i>
      </a> */}
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
