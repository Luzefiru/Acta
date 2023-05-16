import './SignUp.css';
import LogoGitHub from '../../assets/logo-github.svg';
import LogoFacebook from '../../assets/logo-facebook.svg';
import LogoGoogle from '../../assets/logo-google.svg';
import AuthTextField from '../../components/forms/AuthTextField';
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
    <div class="SignUp">
      <h1>Sign In</h1>
      {/* <AuthTextField label="Full Name" placeholder="John Doe" /> */}
      <AuthTextField
        type="email"
        label="Email"
        placeholder="example.email@gmail.com"
      />
      <AuthTextField type="password" label="Password" placeholder="●●●●●●●●" />
      <button type="submit" class="SignUp__submit-btn">
        Sign up
      </button>
      <p className="SignUp__alternative">or sign up with</p>
      <div class="SignUp__options">
        <button
          onClick={signUpWithGooglePopup}
          class="SignUp__options__option google"
        >
          <img alt="Google Login" src={LogoGoogle} />
        </button>
        <button
          onClick={signUpWithFacebookPopup}
          class="SignUp__options__option facebook"
        >
          <img alt="Facebook Login" src={LogoFacebook} />
        </button>
        <button
          onClick={signUpWithGithubPopup}
          class="SignUp__options__option github"
        >
          <img alt="GitHub Login" src={LogoGitHub} />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
