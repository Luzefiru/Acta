/* stylesheet import */
import './App.css';
/* library imports */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* JSX component imports */
import Navbar from './components/layouts/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Feed from './pages/Feed/Feed.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Post from './pages/Post/Post.jsx';
import Profile from './pages/Profile/Profile.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:postID" element={<Post />} />
          <Route path="/profile/:userID" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
