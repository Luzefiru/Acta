import './Navbar.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  const expandNavbar = () => {
    console.log('hi');
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

      <button className="Navbar__nav-expand-button" onClick={expandNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>

      <nav className="Navbar__links">
        <Link to="/create-post">
          <button className="Navbar__links__button">
            <svg
              className="Navbar__links__new-post-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            New Post
          </button>
        </Link>
        <Link to="/feed">
          <svg
            className="Navbar__links__feed-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-newspaper"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
            <path d="M18 14h-8"></path>
            <path d="M15 18h-5"></path>
            <path d="M10 6h8v4h-8V6Z"></path>
          </svg>
        </Link>
        <Link className="Navbar__profile-photo" to="/profile/test">
          <img
            className="Navbar__profile-photo__img"
            alt="User Profile"
            src={ProfilePicturePlaceholder}
          ></img>
          <span className="Navbar__profile-photo__userName">
            <div>Christian Antonio IV L. de Jesus</div>
            <div className="Navbar__profile-photo__userName__viewProfile">
              View Profile
            </div>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
