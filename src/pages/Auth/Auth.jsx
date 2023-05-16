import './Auth.css';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import WaveBackground from '../../assets/waves.svg';

function Auth({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      console.log('Successfully signed in: ', user);
      navigate(`/profile/${user.uid}`, { replace: true });
    } else {
      navigate('/auth', { replace: true });
    }
  }, [navigate, user]);

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
