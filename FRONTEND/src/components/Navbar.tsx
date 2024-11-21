import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";

export const Navbar = () => {
  return (
    <NavbarBootstrap bg="primary" data-bs-theme="dark">
    <Container>
      <NavbarBootstrap.Brand href="#home">Navbar</NavbarBootstrap.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </NavbarBootstrap>
  );
};
