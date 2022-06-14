import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from './LoginButton';
import {LogoutButton} from './LogoutButton';


export function NavbarDemo() {
  
  
    const {isAuthenticated} = useAuth0();
  
      
  
  return (
    <div>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>   
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/new">Edicion</Nav.Link>
            <Nav.Link href="#pricing">xxxxx</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">xxxxx</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>






          
      </Container>
    </Navbar>
  </div>
  )
}

