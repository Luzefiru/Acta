import './Profile.css';
import ProfileCard from './ProfileCard';

function Profile() {
  return (
    <div className="Profile">
      <h1 className="Profile__heading">Settings</h1>
      <nav className="Profile__tabs">
        <ul className="Profile__tabs--ul">
          <li className="Profile__tabs__header active">General</li>
          <li className="Profile__tabs__header">Account</li>
        </ul>
      </nav>
      <ProfileCard />
    </div>
  );
}

export default Profile;
