import './CreatePost.css';
import AddedTags from './AddedTags';
import TextField from '../../components/forms/TextField';
import TextArea from '../../components/forms/TextArea';
import GhostButton from '../../components/ui/GhostButton';
import ContainedButton from '../../components/ui/ContainedButton';
import WaveBackground from '../../assets/waves-slower.svg';
import { Link } from 'react-router-dom';

function CreatePost() {
  return (
    <form className="CreatePost">
      <h1>Create a New Article</h1>
      <div className="CreatePost__card">
        <div className="CreatePost__articleDetails">
          <h3>Article Details</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="lucide lucide-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <fieldset className="CreatePost__fieldset">
          <TextField
            className="CreatePost__fieldset__title"
            id="title"
            label="Title"
            placeholder="What your article is about"
          />
          <TextArea
            className="CreatePost__fieldset__body"
            id="body"
            label="Body"
            placeholder="Share your thoughts here"
          />
        </fieldset>
        <div className="CreatePost__tags">
          <h4>Tags</h4>
          <div className="CreatePost__addedTags">
            <AddedTags />
          </div>
          <button className="CreatePost__addTag-btn">+ Add another tag</button>
        </div>
        <div className="CreatePost__mainButtons">
          <Link to="/feed">
            <GhostButton content="Cancel" />
          </Link>
          <ContainedButton>Post</ContainedButton>
        </div>
      </div>
      <img
        className="CreatePost__waves"
        alt="Animated Waves"
        src={WaveBackground}
      ></img>
    </form>
  );
}

export default CreatePost;
