import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <div>
      <Navbar>
        <Nav.Link as={Link} to="/stocks">
          Stocks
        </Nav.Link>
      </Navbar>
    </div>
  );
};
