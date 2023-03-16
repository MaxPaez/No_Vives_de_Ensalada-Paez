import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light">
      <Container className="NavCont">
        <Navbar.Brand className="NavBrand">
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            No Vives de Ensaladas
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Arma tu menú" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to={"/category/platoPrincipal"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Plato Principal
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/guarnicion"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Guarnición
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/bebida"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Bebida
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
