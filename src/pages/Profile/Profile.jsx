import './Profile.css';
import ProfileCard from './ProfileCard';
import TabGeneral from './TabGeneral';

function Profile({ user }) {
  return (
    <div className="Profile">
      <h1 className="Profile__heading">Profile</h1>
      <nav className="Profile__tabs">
        <ul className="Profile__tabs--ul">
          <li className="Profile__tabs__header active">General</li>
          <li className="Profile__tabs__header">Account</li>
        </ul>
      </nav>
      <ProfileCard user={user} />
      <div className="Profile__details">
        <TabGeneral user={user} />
      </div>
    </div>
  );
}

export default Profile;
