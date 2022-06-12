import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './Card.css'


export function PostCard({ post }) {

  return (
    <div >
      <Card style={{ width: '60rem' }}>
      <Card.Body  className='fondo'>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
          {post.image && <img src={post.image.url} alt={post.title} className="w-25 p-3"/>}
        </Card.Text>
      </Card.Body>
      </Card>
      
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      
    </div>
  );
}
