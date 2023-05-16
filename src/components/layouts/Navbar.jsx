import './Navbar.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../../utils/firebase.config';
import { signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
  const expandNavbar = () => {
    document.querySelector('.Navbar').classList.toggle('expanded');
    document.querySelector('.App').classList.toggle('blur');
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.Navbar__links');
      const expandButton = document.querySelector('.Navbar__nav-expand-button');
      const navSvg = document.querySelectorAll('.Navbar svg');
      const navLine = document.querySelectorAll('.Navbar line');

      if (
        [navMenu, expandButton, ...navSvg, ...navLine].indexOf(e.target) === -1
      ) {
        document.querySelector('.Navbar').classList.remove('expanded');
        document.querySelector('.App').classList.remove('blur');
      }
    });
  }, []);

  return (
    <header className="Navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo color="var(--icon)" hoverColor="var(--icon-hover)" />
      </Link>

      {user !== null ? displayNav(expandedNavItems, user) : ''}

      <button
        className="Navbar__nav-expand-button lucide lucide-menu"
        onClick={expandNavbar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default Navbar;

function displayNav(expandedNavItems, user) {
  return (
    <nav className="Navbar__links">
      <Link to="/create-post">
        <button className="Navbar__links__button">
          <svg
            className="Navbar__links__new-post-icon lucide lucide-edit"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--surface)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          New Post
        </button>
      </Link>
      <Link to="/feed">
        <svg
          className="Navbar__links__feed-icon desktop lucide lucide-newspaper"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
          <path d="M18 14h-8"></path>
          <path d="M15 18h-5"></path>
          <path d="M10 6h8v4h-8V6Z"></path>
        </svg>
      </Link>
      <Link
        onClick={() => {
          signOut(auth);
        }}
        className="Link--logout desktop"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" x2="9" y1="12" y2="12"></line>
        </svg>
      </Link>
      <Link className="Navbar__profile-photo" to={`/profile/${user.uid}`}>
        <img
          className="Navbar__profile-photo__img"
          alt="User Profile"
          src={
            user.photoURL !== null ? user.photoURL : ProfilePicturePlaceholder
          }
        ></img>
        <span className="Navbar__profile-photo__userName">
          <div>John Doe</div>
          <div className="Navbar__profile-photo__userName__viewProfile">
            View Profile
          </div>
        </span>
      </Link>

      {expandedNavItems(user)}
    </nav>
  );
}

function expandedNavItems(user) {
  return (
    <div className="expandedNavItems">
      <div className="expandedNavItems__menu-title">Navigation</div>
      <Link to="/feed">
        <svg
          className="Navbar__links__feed-icon lucide lucide-newspaper"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
          <path d="M18 14h-8"></path>
          <path d="M15 18h-5"></path>
          <path d="M10 6h8v4h-8V6Z"></path>
        </svg>
        Feed
      </Link>
      <Link to={`/profile/${user.uid}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Profile
      </Link>
      <Link
        onClick={() => {
          signOut(auth);
        }}
        className="Link--logout"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" x2="9" y1="12" y2="12"></line>
        </svg>
        Log Out
      </Link>
    </div>
  );
}
