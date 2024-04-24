import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbar-container">
          <span className="navbar-text">Pokedex</span> {/* The "title" for the navbar */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Navbar to collapse into a toggleable menu */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link> {/*Link to home route */}
            <Nav.Link as={Link} to ="/about">About</Nav.Link> {/*Link to about route */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
