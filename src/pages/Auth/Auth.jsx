import './Auth.css';
import { Outlet } from 'react-router-dom';

function Auth() {
  return (
    <div className="Auth">
      <Outlet />
    </div>
  );
}

export default Auth;
