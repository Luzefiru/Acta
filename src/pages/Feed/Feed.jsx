import './Feed.css';
import CardNews from './CardNews';
import FilterController from './FilterController';
import CardArticle from './CardArticle';
import ExploreTags from './ExploreTags';

function Feed() {
  const generateNewsCards = (arrOfNewsArticles) => {
    return arrOfNewsArticles.map((data) => (
      <CardNews
        imgSrc={data.imgSrc}
        title={data.title}
        datePosted={data.datePosted}
      />
    ));
  };

  const generateArticleCards = (arrOfArticles) => {
    return arrOfArticles.map((data) => (
      <CardArticle
        title={data.title}
        description={data.description}
        tags={data.tags}
        imgSrc={data.imgSrc}
      />
    ));
  };

  return (
    <div className="Feed">
      <main className="Feed__main">
        <h2 className="Feed__main header">Latest Articles</h2>
        <FilterController />
        <div className="Feed__main__cards">
          {generateArticleCards(fetchedArticleCards)}
        </div>
      </main>
      <aside className="Feed__aside">
        <h2 className="Feed__aside header">News</h2>
        <div className="Feed__aside__cards">
          {generateNewsCards(fetchedNewsCards)}
        </div>
        <h2 className="Feed__aside header">Explore Tags</h2>
        <div className="Feed__aside__tags">
          <ExploreTags />
        </div>
      </aside>
    </div>
  );
}

export default Feed;

/* TODO: Create functions to fetch cards from database to load as cards */
var fetchedNewsCards = [
  {
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'ChatGPT Surpasses Human Intelligence',
    datePosted: 'Today',
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'ChatGPT Surpasses Human Intelligence',
    datePosted: 'Today',
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'ChatGPT Surpasses Human Intelligence',
    datePosted: 'Today',
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'ChatGPT Surpasses Human Intelligence',
    datePosted: 'Today',
  },
];

var fetchedArticleCards = [
  {
    title: 'How to Use Acta: The Complete Guide for Marketers',
    description:
      'I started writing on Acta in November 2019 with the primary goal of earning a side income. I decided to write about my areas of expertise: software development, machine learning, and life in a tech startup.',
    tags: ['Programming', 'Technology', 'News'],
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    title: 'How to Use Acta: The Complete Guide for Marketers',
    description:
      'I started writing on Acta in November 2019 with the primary goal of earning a side income. I decided to write about my areas of expertise: software development, machine learning, and life in a tech startup.',
    tags: ['Programming', 'Technology', 'News'],
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    title: 'How to Use Acta: The Complete Guide for Marketers',
    description:
      'I started writing on Acta in November 2019 with the primary goal of earning a side income. I decided to write about my areas of expertise: software development, machine learning, and life in a tech startup.',
    tags: ['Programming', 'Technology', 'News'],
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    title: 'How to Use Acta: The Complete Guide for Marketers',
    description:
      'I started writing on Acta in November 2019 with the primary goal of earning a side income. I decided to write about my areas of expertise: software development, machine learning, and life in a tech startup.',
    tags: ['Programming', 'Technology', 'News'],
    imgSrc:
      'https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
];
