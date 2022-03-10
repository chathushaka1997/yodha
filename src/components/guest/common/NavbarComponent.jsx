import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/logo1.PNG";

const NavbarComponent = () => {
  return (
    <div style={{ backgroundImage: "linear-gradient(rgba(51, 70, 102,1.0),rgba(0,0,0,0.0))", color: "white" }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="200" className="d-inline-block align-top" alt="Yodha Resort" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ color: "white",fontSize:"18px",fontFamily:' "Raleway", sans-serif',fontWeight:"600",letterSpacing:"2px" }}>
              <Nav.Link href="#home" style={{ color: "#FFE4E4" }} className="me-4">
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "#FFE4E4" }} className="me-4">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "#FFE4E4" }} className="me-4">
                Contacts
              </Nav.Link>
              <button className="btn ms-0 ms-md-5 ps-4 pe-4" style={{background:"#E1963C"}}>Book a room</button>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
