import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">No Vives de Ensaladas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Arma tu menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Plato Principal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Guarnición</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebida</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
