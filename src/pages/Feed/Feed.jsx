import './Feed.css';
import CardNews from './CardNews';
import FilterController from './FilterController';
import CardArticle from './CardArticle';

function Feed() {
  return (
    <div className="Feed">
      <main className="Feed__main">
        <h2 className="Feed__main header">Latest Articles</h2>
        <FilterController />
        <div className="Feed__main__cards">
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>
      </main>
      <aside className="Feed__aside">
        <h2 className="Feed__aside header">News</h2>
        <div className="Feed__aside__cards">
          <CardNews
            imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            header="ChatGPT Surpasses Human Intelligence"
            datePosted="Today"
          />
          <CardNews
            imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            header="ChatGPT Surpasses Human Intelligence"
            datePosted="Today"
          />
          <CardNews
            imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            header="ChatGPT Surpasses Human Intelligence"
            datePosted="Today"
          />
          <CardNews
            imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            header="ChatGPT Surpasses Human Intelligence"
            datePosted="Today"
          />
          <CardNews
            imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            header="ChatGPT Surpasses Human Intelligence"
            datePosted="Today"
          />
        </div>
      </aside>
    </div>
  );
}

export default Feed;
