import { Navbar, Nav } from "react-bootstrap";

export const NavbarMenu = () => {
  return (
    <div>
      <Navbar>
        <Nav>
          <Nav.Link href="/stocks">Stocks</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
