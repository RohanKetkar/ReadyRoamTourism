import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";


import { Router } from "../Route/Route";

export function Navbarpackage() {
  return (
    <Navbar style={{ backgroundColor: "#5045e3" }} data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReadyRome</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            
            
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
