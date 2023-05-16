import './Profile.css';
import ProfileCard from './ProfileCard';
import TabGeneral from './TabGeneral';
import { useState } from 'react';

function Profile({ user }) {
  const [fname, setFname] = useState('');
  const [dname, setDname] = useState('');
  const [bio, setBio] = useState('');

  const handleChange = (e, setFn) => {
    console.log(e.target.value);
    setFn(e.target.value);
  };

  return (
    <div className="Profile">
      <h1 className="Profile__heading">Profile</h1>
      <nav className="Profile__tabs">
        <ul className="Profile__tabs--ul">
          <li className="Profile__tabs__header active">General</li>
          <li className="Profile__tabs__header">Account</li>
        </ul>
      </nav>
      <ProfileCard user={user} fname={fname} dname={dname} bio={bio} />
      <div className="Profile__details">
        <TabGeneral
          user={user}
          fname={fname}
          setFname={setFname}
          dname={dname}
          setDname={setDname}
          bio={bio}
          setBio={setBio}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Profile;
