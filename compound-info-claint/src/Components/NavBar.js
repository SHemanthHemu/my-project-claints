import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../public/Mrf-Logo-Vector.svg-.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt="Logo" className="logo" width={70} height={70} />
        <Navbar.Brand href="/home">
          Reporting <br /> System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="RM Module" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RmHome">Rm Home</NavDropdown.Item>
              <NavDropdown.Item href="/RmHome/RmAddForm">
                Add New Material
              </NavDropdown.Item>
              <NavDropdown.Item href="/RmHome/DisplayMaterials">
                Material Display
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Compound Module" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
