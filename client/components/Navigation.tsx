import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Covid19 Status</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" >Introduce</Nav.Link>
        <Nav.Link as={Link} to="/koreaData">Korea Data</Nav.Link>
        <Nav.Link as={Link} to="/globalData">Global Data</Nav.Link>
      </Nav>
      
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );

}

export default Navigation;