import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm, UserPage} from "./pages";
import { PostProvider } from "./context/postContext";
import './App.css'

function App() {
  return (
    <div>
      <div >
        
        <PostProvider>
         <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/:id" element={<PostForm />} />
            <Route path="/users/:userid" element={<UserPage/>} />
            <Route path="/usuarios" element={<Navigate to="/users/:userid" />} />
            <Route path="/demo" element={<HomePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </div>  
        </PostProvider>
        
      </div>
    </div>
  );
}

export default App;
