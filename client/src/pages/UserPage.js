import { useParams } from "react-router-dom";

export function UserPage() {

  const {userid} = useParams();

  return (
    <div>  
      User <h1>{userid}</h1>
    </div>
  )
}

