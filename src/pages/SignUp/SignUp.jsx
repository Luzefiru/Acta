import './SignUp.css';
import LogoGitHub from '../../assets/logo-github.svg';
import LogoFacebook from '../../assets/logo-facebook.svg';
import LogoGoogle from '../../assets/logo-google.svg';
import TextField from '../../components/forms/TextField';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div class="SignUp">
      <h1>Create an account</h1>
      <TextField label="Full Name" placeholder="John Doe" />
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
      <button type="submit" class="SignUp__submit-btn">
        Sign up
      </button>
      <p className="SignUp__alternative">or sign up with</p>
      <div class="SignUp__options">
        <button class="SignUp__options__option google">
          <img alt="Google Login" src={LogoGoogle} />
        </button>
        <button class="SignUp__options__option facebook">
          <img alt="Facebook Login" src={LogoFacebook} />
        </button>
        <button class="SignUp__options__option github">
          <img alt="GitHub Login" src={LogoGitHub} />
        </button>
      </div>
      <div class="SignUp__link">
        Already have an account? Log in&nbsp;
        <Link to="/auth/login">here</Link>
      </div>
    </div>
  );
}

export default SignUp;
