import './LogIn.css';
import LogoGitHub from '../../assets/logo-github.svg';
import LogoFacebook from '../../assets/logo-facebook.svg';
import LogoGoogle from '../../assets/logo-google.svg';
import TextField from '../../components/forms/TextField';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div class="LogIn">
      <h1>
        Log in to <span>Acta</span>
      </h1>
      <TextField
        type="email"
        label="Email"
        placeholder="example.email@gmail.com"
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Enter at least 8+ characters"
      />
      <button type="submit" class="LogIn__submit-btn">
        Log in
      </button>
      <p className="LogIn__alternative">or log in with</p>
      <div class="LogIn__options">
        <button class="LogIn__options__option google">
          <img alt="Google Login" src={LogoGoogle} />
        </button>
        <button class="LogIn__options__option facebook">
          <img alt="Facebook Login" src={LogoFacebook} />
        </button>
        <button class="LogIn__options__option github">
          <img alt="GitHub Login" src={LogoGitHub} />
        </button>
      </div>
      <div class="LogIn__link">
        Don't have an account? Sign up&nbsp;
        <Link to="/auth">here</Link>
      </div>
    </div>
  );
}

export default LogIn;
