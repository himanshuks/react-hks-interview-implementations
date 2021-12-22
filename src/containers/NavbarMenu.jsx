import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <div>
      <Navbar>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/asteroids">
          Asteroids
        </Nav.Link>
        <Nav.Link as={Link} to="/baskets">
          Baskets
        </Nav.Link>
        <Nav.Link as={Link} to="/stocks">
          Stocks
        </Nav.Link>
      </Navbar>
    </div>
  );
};
