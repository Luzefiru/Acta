import './SignUp.css';
import LogoGitHub from '../../assets/logo-github.svg';
import LogoFacebook from '../../assets/logo-facebook.svg';
import LogoGoogle from '../../assets/logo-google.svg';

function SignUp() {
  return (
    <div class="SignUp">
      <h1>Create an account</h1>
      <div class="FormField">
        <p class="FormField__field">Full name</p>
        <input type="text" placeholder="John Doe" />
      </div>
      <div class="FormField">
        <p class="FormField__field">Email</p>
        <input type="text" placeholder="example.email@gmail.com" />
      </div>
      <div class="FormField">
        <p class="FormField__field">Password</p>
        <input type="password" placeholder="Enter at least 8+ characters" />
      </div>

      <button class="SignUp__submit-btn">Sign up</button>
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
    </div>
  );
}

export default SignUp;
