import ArticleTag from '../../components/ui/ArticleTag';
import './ExploreTags.css';

function ExploreTags(props) {
  // uses some sort of algorithm to determine the most viewed/popular tags
  const fetchedTrendingTags = [
    'Web Development',
    'Mobile Apps',
    'Artificial Intelligence',
    'Data Science',
    'Cloud Computing',
    'Internet of Things',
    'Cybersecurity',
    'Virtual Reality',
    'Augmented Reality',
    'Blockchain',
    'Programming Languages',
    'Machine Learning',
    'Web Design',
    'UI/UX',
    'DevOps',
    'Software Development',
    'Robotics',
    'Gaming',
    'Cryptocurrency',
    'Big Data',
  ];

  return (
    <div className="ExploreTags">
      {fetchedTrendingTags.map((tag) => (
        <ArticleTag>{tag}</ArticleTag>
      ))}
    </div>
  );
}

export default ExploreTags;
