import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Add this line */}
            <Nav.Link as={Link} to="/monitor">Monitor</Nav.Link>
            <Nav.Link as={Link} to="/update-sensor-settings">Update Sensor Settings</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;