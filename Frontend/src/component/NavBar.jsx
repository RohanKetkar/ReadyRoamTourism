import { Container, Nav, Navbar, NavDropdown,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Router } from "../Route/Route";
import { FaSignOutAlt } from "react-icons/fa"; // Import logout icon from react-icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export function NavBar() {
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
      toast.error("You are logged out", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to log out");
    }
  };
  return (
    <Navbar style={{ backgroundColor: "#5045e3" }} data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReadyRome</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title="Country"
              style={{ textDecoration: "none", color: "white" }}
              id="navbar-dropdown"
              menuVariant="dark"
            >
              <NavDropdown title="Dubai (UAE)" id="navbar-dropdown" menuVariant="dark" drop="end">
                <NavDropdown.Item href="#">
                  <Link to={Router.PACKAGE} style={{ textDecoration: "none", color: "white" }}>
                    Downtown Dubai
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link to={Router.PACKAGE} style={{ textDecoration: "none", color: "white" }}>
                    Dubai Marina
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link to={Router.PACKAGE} style={{ textDecoration: "none", color: "white" }}>
                    Palm Jumeirah
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link to={Router.PACKAGE} style={{ textDecoration: "none", color: "white" }}>
                    Jumeirah
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link to={Router.PACKAGE} style={{ textDecoration: "none", color: "white" }}>
                    Al Barsha
                  </Link>
                </NavDropdown.Item>
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
            </NavDropdown>
            <Link className="mx-3 mt-2" to={Router.ABOUT} style={{ textDecoration: "none", color: "white" }}>
              About us
            </Link>
            <Link className="mt-2" to={Router.CONTACTUS} style={{ textDecoration: "none", color: "white" }}>
              Contact us
            </Link>
          </Nav>
          <Nav className="ms-2">
            <Nav.Link href="#" style={{ color: "white"}}>
              <Button onClick={handleSubmit} style={{background:"none" ,border:"none"}}><FaSignOutAlt style={{ fontSize: "1.5rem" }} /></Button> 
            </Nav.Link>
            <ToastContainer />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
