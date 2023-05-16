import RemovableArticleTag from '../../components/ui/RemovableArticleTag';
import './AddedTags.css';

function AddedTags(props) {
  const addedTags = [
    'Web Development',
    'Cloud Computing',
    'Mobile Apps',
    'Artificial Intelligence',
    'Data Science',
    'Cybersecurity',
  ];

  return (
    <div className="AddedTags">
      {addedTags.map((tag) => (
        <RemovableArticleTag>{tag}</RemovableArticleTag>
      ))}
    </div>
  );
}

export default AddedTags;
