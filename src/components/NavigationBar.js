import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          WAN MOVIES
        </Navbar.Brand>
        <Nav className="flex justify-content-end gap-4">
          <Nav.Item>
            <Nav.Link href="#movies">Movies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
