import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import './App.css';
import { LoginButton } from "./components/LoginButton";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/LogoutButton";
import {useAuth0} from '@auth0/auth0-react';

import { HomePage, NotFoundPage, PostForm, Login, SignUp, LogApp} from "./pages";


function App() {





  return (
    
      <div >
        
        <PostProvider>
         <div>            
            
            
            
            <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route exact path="/home" element={<HomePage />} />
            
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
            

          </div>  
        </PostProvider>
        
      </div>
    
  );
}

export default App;
