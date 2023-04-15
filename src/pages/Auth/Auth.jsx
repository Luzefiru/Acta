import './Auth.css';
import { Outlet } from 'react-router-dom';
import WaveBackground from '../../assets/waves.svg';

function Auth() {
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
