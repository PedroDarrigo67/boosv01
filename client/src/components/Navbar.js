import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

export function Navbarpost() {
  return (
    <div >  
    
    <Navbar 
      expand="lg" 
      variant="light" 
      bg="light" 
      fixed="top" 
      height="100%"
      className="navbar navbar-dark bg-dark"
      >
      
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../pages/HomePage.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../pages/PostForm.js">Nueva Publicacion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      
      </ul>  

    </Navbar>
    
    
    
    
    
    
    
    
     </div>
  )
}

