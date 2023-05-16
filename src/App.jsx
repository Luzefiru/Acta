/* stylesheet import */
import './App.css';
/* library imports */
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* JSX component imports */
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Auth from './pages/Auth/Auth';
import SignUp from './pages/Auth/SignUp';
import LogIn from './pages/Auth/LogIn';
import Feed from './pages/Feed/Feed.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Post from './pages/Post/Post.jsx';
import Profile from './pages/Profile/Profile.jsx';

/* Firebase authentication state management */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase.config';

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (authUser) => {
    if (authUser !== null) {
      setUser(authUser);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (user !== null) {
      toast.success('You are signed in.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: 'signin',
      });
    } else {
      toast.error('You are currently signed out.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: 'signout',
      });
    }
  }, [user]);

  return (
    <div className="App">
      <HashRouter>
        <Navbar user={user} />
        <div className="App--wrapper">
          {/* This div wrapper used to give padding to page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth user={user} />}>
              <Route index element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
            </Route>
            <Route path="/feed" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:postID" element={<Post />} />
            <Route path="/profile/:userID" element={<Profile user={user} />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
