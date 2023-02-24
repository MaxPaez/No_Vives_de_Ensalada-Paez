import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <Navbar bg="light">
      <Container className="NavCont">
        <Navbar.Brand className="NavBrand" href="#home">
          No Vives de Ensaladas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Arma tu menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Plato Principal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Guarnición</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebida</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
