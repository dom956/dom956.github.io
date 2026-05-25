import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import logo from '../Images/Logos/logo.png';
import "../Styles/Navbar.css";


function NavbarMenu() {
  return (
   <Navbar bg="transparent">
    <Container className='container'>
      <Link to="/">
        <div className='logo-brand'>
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        </div>
      </Link>
      <Nav className="links">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="https://drive.google.com/drive/folders/1L0paCOzg_2mJAc2-I5qf1OH3Ozbs17VB?usp=sharing" target="_blank" rel="noopener noreferrer">
        Press Kit
      </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavbarMenu;