import {Container, Col, Row, Image} from 'react-bootstrap';
import {NavbarDemo} from '../components/NavbarDemo';
import { usePosts } from "../context/postContext";
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

export function CardHome() {
  const { getPost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState ( { 
    title: '',
    description: '',
    

   
      

  }) 

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);

        console.log(params.id)  

        setPost({
          title: post.title,
          description: post.description,
         
          
          
        });
      }
    })();
  }, [params.id, getPost]);
  
  return (
    <div> 
      <NavbarDemo/>
      <Container>
        <Row>
          
          <Col sm={2}>
            <h1> {post.title} </h1>      
          </Col>
          <Col sm={8}></Col>
          <Col sm={2}>
            {params.id}
          </Col>
          </Row>
          <Row>        
          <Col sm={4}>
          <h3> {post.description} </h3>
          </Col>
          <Col>
            
          </Col>
          </Row>
          
        
      </Container>
      


    





    </div>
  )
}
