
import { PostProvider } from "./context/postContext";
import './App.css';
import { LoginButton } from "./components/LoginButton";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/LogoutButton";
import {useAuth0} from '@auth0/auth0-react';
import {Log} from './Log';


function App() {

const {isAuthenticated} = useAuth0 () 



  return (
    
      <div >
        
        <PostProvider>
         <div>            
            {isAuthenticated ? <Log />:<LoginButton/>}
              <Profile />
            

          </div>  
        </PostProvider>
        
      </div>
    
  );
}

export default App;
