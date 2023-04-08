import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: "0", zIndex: "20" }}
    >
      <Container className="justify-content-between">
        <Navbar.Brand className="NavBrand">
          <NavLink
            to={"/"}
            style={{
              alignItems: "center",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-flex",
            }}
          >
            <img
              alt="Logo NVE"
              src="https://firebasestorage.googleapis.com/v0/b/no-vives-de-ensalada.appspot.com/o/assets%2Fimages%2FLogo%20NVE%20sf.png?alt=media&token=be79579f-08c6-4a2c-a49f-b73edbcad5d9"
              width="40"
              className="d-inline-block align-top"
            />{" "}
            <div
              style={{
                marginInlineStart: "0.5em",
                color: "#0DB990",
                fontFamily: "Teko, sans-serif",
                fontSize: "1.2em",
              }}
            >
              No Vives de <br /> Ensaladas
            </div>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Arma tu menú"
              id="basic-nav-dropdown"
              style={{ fontFamily: "Comfortaa, cursive", fontWeight: "bold" }}
            >
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
