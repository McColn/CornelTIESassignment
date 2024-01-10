import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavbarPage() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Library Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/users" className="nav-link">Users</Link>
          <Link to="/home" className="nav-link">My Favourite</Link>
          </Nav>
          <Nav>
              <Link to="/" className="nav-link"><i className="bi bi-power text-success">Logout</i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;