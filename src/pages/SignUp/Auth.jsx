import './Auth.css';
import { Outlet, useNavigate } from 'react-router-dom';
/* Firebase authentication state management */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';

function Auth() {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log('Successfully signed in: ', user);
      navigate(`/profile/${user.uid}`, { replace: true });
    } else {
      throw new Error('Failed to log in. Try again.');
    }
  });

  return (
    <div className="Auth">
      <Outlet />
    </div>
  );
}

export default Auth;
