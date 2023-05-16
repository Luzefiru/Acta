import './ProfileCard.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';
import ClipboardField from './ClipboardField';

function ProfileCard({ user }) {
  return (
    <div className="ProfileCard">
      <img
        className="ProfileCard__img"
        alt="User Profile"
        src={user.photoURL !== null ? user.photoURL : ProfilePicturePlaceholder}
      ></img>
      <div className="ProfileCard__edit-btn">
        <svg
          className="ProfileCard__edit-btn__icon lucide lucide-camera"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      </div>
      <h3 className="ProfileCard__name">Christian Antonio IV L. de Jesus</h3>
      <div className="ProfileCard__title">Professional Title</div>
      <div className="ProfileCard__bio">
        Aperiam quidem praesentium deleniti illum totam omnis expedita expl.
      </div>
      <hr />
      <div className="ProfileCard__link">Profile Link</div>
      <ClipboardField user={user} />
    </div>
  );
}

export default ProfileCard;
