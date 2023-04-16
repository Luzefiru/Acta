import './SignUp.css';
import LogoGitHub from '../../assets/logo-github.svg';
import LogoFacebook from '../../assets/logo-facebook.svg';
import LogoGoogle from '../../assets/logo-google.svg';
import AuthTextField from '../../components/forms/AuthTextField';
import { Link } from 'react-router-dom';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../../utils/firebase.config';

// Authentication providers
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();

// Authentication sign up functions
const signUpWithGooglePopup = async () => {
  const result = await signInWithPopup(auth, providerGoogle);
  console.log(result);
};

const signUpWithFacebookPopup = async () => {
  const result = await signInWithPopup(auth, providerFacebook);
  console.log(result);
};

const signUpWithGithubPopup = async () => {
  const result = await signInWithPopup(auth, providerGithub);
  console.log(result);
};

function SignUp() {
  return (
    <div className="SignUp">
      <h1>Create an account</h1>
      <AuthTextField label="Full Name" placeholder="John Doe" />
      <AuthTextField
        type="email"
        label="Email"
        placeholder="example.email@gmail.com"
      />
      <AuthTextField
        type="password"
        label="Password"
        placeholder="Enter at least 8+ characters"
      />
      <button type="submit" className="SignUp__submit-btn">
        Sign up
      </button>
      <p className="SignUp__alternative">or sign up with</p>
      <div className="SignUp__options">
        <button
          onClick={signUpWithGooglePopup}
          className="SignUp__options__option google"
        >
          <img alt="Google Login" src={LogoGoogle} />
        </button>
        <button
          onClick={signUpWithFacebookPopup}
          className="SignUp__options__option facebook"
        >
          <img alt="Facebook Login" src={LogoFacebook} />
        </button>
        <button
          onClick={signUpWithGithubPopup}
          className="SignUp__options__option github"
        >
          <img alt="GitHub Login" src={LogoGitHub} />
        </button>
      </div>
      <div className="SignUp__link">
        Already have an account? Log in&nbsp;
        <Link to="/auth/login">here</Link>
      </div>
    </div>
  );
}

export default SignUp;
