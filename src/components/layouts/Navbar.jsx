import './Navbar.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <Logo />
      </Link>

      <nav className="Navbar__links">
        <Link to="/feed">Feed</Link>
        <Link to="/create-post">Create Post</Link>
      </nav>

      <Link className="Navbar__profile-photo" to="/profile/test">
        <img
          className="Navbar__profile-photo__img"
          alt="User Profile"
          src={ProfilePicturePlaceholder}
        ></img>
      </Link>
    </div>
  );
};

export default Navbar;
