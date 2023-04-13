import './AuthorCard.css';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';

const AuthorCard = (props) => {
  const {
    name = 'Anonymous',
    title = 'User',
    profilePictureURL = ProfilePicturePlaceholder,
  } = props;
  return (
    <div className="AuthorCard">
      <h3 className="AuthorCard__heading">Author</h3>
      <h2 className="AuthorCard__name">{name}</h2>
      <div className="AuthorCard__title">{title}</div>
      <img
        className="AuthorCard__img"
        src={profilePictureURL}
        alt="Author's Portrait"
      ></img>
    </div>
  );
};

export default AuthorCard;
