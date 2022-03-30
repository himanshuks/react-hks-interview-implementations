import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// https://react-bootstrap.netlify.app/components/navbar/#navbar-api
// Nav.Link as={Link} to="" ------ Used to use react route on NavLink instead of reloading page on click

export const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/asteroids">
            Asteroids
          </Nav.Link>
          <Nav.Link as={Link} to="/baskets">
            Baskets
          </Nav.Link>
          <Nav.Link as={Link} to="/hooks">
            Hooks
          </Nav.Link>
          <Nav.Link as={Link} to="/stocks">
            Stocks
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
