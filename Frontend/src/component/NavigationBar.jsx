import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Router } from "../Route/Route";


import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <Navbar bg="light">
      <Container>
        {/* Left-aligned brand */}
        <Navbar.Brand href="#home" className="text-indigo-600">
          ReadyRoam
        </Navbar.Brand>

        {/* Center-aligned links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" gap-8 ml-[30vw] no-underline" style={{ textDecoration: "none" }}>
            <Link style={{ textDecoration: "none" }} to={Router.ABOUT}>
            
              About Us
           
            </Link>
            <Link to={Router.CONTACTUS} style={{ textDecoration: "none" }}>
           
              Contact Us
          
            </Link>
            <Link to={Router.SIGNIN} style={{ textDecoration: "none" }}>
                       Signin
                    </Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
