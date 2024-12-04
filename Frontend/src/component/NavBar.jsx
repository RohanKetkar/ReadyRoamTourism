import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";


import { Router } from "../Route/Route";

export function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "#5045e3" }} data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReadyRome</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Country" id="navbar-dropdown" menuVariant="dark">
              <NavDropdown title="Australia" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">New South Wales</NavDropdown.Item>
                <NavDropdown.Item href="#">Queensland</NavDropdown.Item>
                <NavDropdown.Item href="#">South Australia</NavDropdown.Item>
                <NavDropdown.Item href="#">Victoria</NavDropdown.Item>
                <NavDropdown.Item href="#">Western Australia</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Brazil" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Bahia</NavDropdown.Item>
                <NavDropdown.Item href="#">Minas Gerais</NavDropdown.Item>
                <NavDropdown.Item href="#">Pernambuco</NavDropdown.Item>
                <NavDropdown.Item href="#">Rio de Janeiro</NavDropdown.Item>
                <NavDropdown.Item href="#">Sao Paulo</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Canada" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Alberta</NavDropdown.Item>
                <NavDropdown.Item href="#">British Columbia</NavDropdown.Item>
                <NavDropdown.Item href="#">Nova Scotia</NavDropdown.Item>
                <NavDropdown.Item href="#">Ontario</NavDropdown.Item>
                <NavDropdown.Item href="#">Quebec</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="China" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Beijing</NavDropdown.Item>
                <NavDropdown.Item href="#">Shanghai</NavDropdown.Item>
                <NavDropdown.Item href="#">Sichuan</NavDropdown.Item>
                <NavDropdown.Item href="#">Yunnan</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dubai (UAE)" id="navbar-dropdown" menuVariant="dark" drop="end">
                <Link to={Router.PACKAGE}>Downtown Dubai</Link>
                <NavDropdown.Item href="#">Dubai Marina</NavDropdown.Item>
                <NavDropdown.Item href="#">Palm Jumeirah</NavDropdown.Item>
                <NavDropdown.Item href="#">Jumeirah</NavDropdown.Item>
                <NavDropdown.Item href="#">Al Barsha</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="France" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Aquitaine</NavDropdown.Item>
                <NavDropdown.Item href="#">Paris</NavDropdown.Item>
                <NavDropdown.Item href="#">Normandy</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Germany" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Bavaria</NavDropdown.Item>
                <NavDropdown.Item href="#">Berlin</NavDropdown.Item>
                <NavDropdown.Item href="#">Hamburg</NavDropdown.Item>
                <NavDropdown.Item href="#">North Rhine-Westphalia</NavDropdown.Item>
                <NavDropdown.Item href="#">Saxony</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="India" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Delhi</NavDropdown.Item>
                <NavDropdown.Item href="#">Gujarat</NavDropdown.Item>
                <NavDropdown.Item href="#">Karnataka</NavDropdown.Item>
                <NavDropdown.Item href="#">Kerala</NavDropdown.Item>
                <NavDropdown.Item href="#">Maharashtra</NavDropdown.Item>
                <NavDropdown.Item href="#">Rajasthan</NavDropdown.Item>
                <NavDropdown.Item href="#">Tamil Nadu</NavDropdown.Item>
                <NavDropdown.Item href="#">Uttar Pradesh</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Russia" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">Moscow</NavDropdown.Item>
                <NavDropdown.Item href="#">Saint Petersburg</NavDropdown.Item>
                <NavDropdown.Item href="#">Siberia</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="United Kingdom" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">England</NavDropdown.Item>
                <NavDropdown.Item href="#">Northern Ireland</NavDropdown.Item>
                <NavDropdown.Item href="#">Scotland</NavDropdown.Item>
                <NavDropdown.Item href="#">Wales</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="United States" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">California</NavDropdown.Item>
                <NavDropdown.Item href="#">Florida</NavDropdown.Item>
                <NavDropdown.Item href="#">Hawaii</NavDropdown.Item>
                <NavDropdown.Item href="#">New York</NavDropdown.Item>
                <NavDropdown.Item href="#">Texas</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
