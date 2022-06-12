import { usePosts } from "../context/postContext";
import { PostCard } from "../components/PostCard";
import {Container, Row, Col} from 'react-bootstrap';
import {Demo} from './Demo'

export function HomePage() {
  const { posts } = usePosts();
  

  
    return (
     <div>

    <Demo/>

    <Container>
      <Row>
        <Col> 
          hola
        </Col>
      </Row>

      <Row>
        <Col> 
          <div>
          {posts.map((post) => (
          <PostCard key={post._id} post={post} />
          ))}
        </div>
        </Col>
      </Row>  

    </Container>
    


     
      
     
     
     
      
      
      </div>
    );
  };

  

