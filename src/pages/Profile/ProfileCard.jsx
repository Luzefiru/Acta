import './ProfileCard.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <img
        className="ProfileCard__img"
        alt="User Profile"
        src={ProfilePicturePlaceholder}
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
    </div>
  );
}

export default ProfileCard;
