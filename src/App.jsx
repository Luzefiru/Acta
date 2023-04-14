/* stylesheet import */
import './App.css';
/* library imports */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* JSX component imports */
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Auth from './pages/SignUp/Auth';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/SignUp/LogIn';
import Feed from './pages/Feed/Feed.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Post from './pages/Post/Post.jsx';
import Profile from './pages/Profile/Profile.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="App--wrapper">
          {/* This div wrapper used to give padding to page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />}>
              <Route index element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
            </Route>
            <Route path="/feed" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:postID" element={<Post />} />
            <Route path="/profile/:userID" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
