import './Feed.css';
import CardNews from './CardNews';

function Feed() {
  return (
    <div className="Feed">
      <main className="Feed__main">
        <h2 className="Feed__main__header">Latest Articles</h2>
      </main>
      <aside className="Feed__aside">
        <h2 className="Feed__aside__header">News</h2>
        <CardNews
          imgSrc="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          header="ChatGPT Surpasses Human Intelligence"
          datePosted="Today"
        />
      </aside>
    </div>
  );
}

export default Feed;
