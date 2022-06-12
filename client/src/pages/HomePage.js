import {Navbarpost} from '../components/Navbar';
import {Container, Row, Col} from 'react-bootstrap';
import { usePosts } from "../context/postContext";
import { PostCard } from "../components/PostCard";
import './HomePage.css'

export function HomePage() {
  const { posts } = usePosts();
  
  return (
    <div className='fondo'>

      <Navbarpost/>

    <Container>
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
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      </Container>
    

    </div>
  )
}
