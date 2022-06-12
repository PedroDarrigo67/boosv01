import {Navbarpost} from '../components/Navbar';
import {NavbarPie} from '../components/NavbarPie'
import {Container, Row, Col} from 'react-bootstrap';
import { usePosts } from "../context/postContext";
import { PostCard } from "../components/PostCard";
import './HomePage.css'

export function HomePage() {
  const { posts } = usePosts();
  
  return (
    <div className='fondo'>

      

    <Container>
      <Row> 
        <Col>
        <Navbarpost/>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col>Lista de Propiedades</Col>
        <Col md={10}>  
          <div >
            {posts.map((post) => (
            <PostCard key={post._id} post={post} />
            ))}
          </div>
        </Col>
        
      </Row>
      <Row>
        <Col> 
              <NavbarPie/>
         </Col>
        
      </Row>
      </Container>
    

    </div>
  )
}
