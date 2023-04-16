import './Auth.css';
import { Outlet, useNavigate } from 'react-router-dom';
/* Firebase authentication state management */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';
import WaveBackground from '../../assets/waves.svg';

function Auth() {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log('Successfully signed in: ', user);
      navigate(`/profile/${user.uid}`, { replace: true });
    } else {
      navigate('/auth', { replace: true });
    }
  });

  return (
    <div className="Auth">
      <Outlet />
      <img
        className="Auth__waves"
        alt="Animated Waves"
        src={WaveBackground}
      ></img>
    </div>
  );
}

export default Auth;
