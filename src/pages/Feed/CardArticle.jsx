import './CardArticle.css';
import ArticleTag from '../../components/ui/ArticleTag';

function CardArticle(props) {
  const { imgSrc, title, description, tags } = props;

  return (
    <article className="CardArticle">
      <img
        className="CardArticle__img"
        src={`https://picsum.photos/${Math.floor(Math.random() * 100) + 800}`}
        alt="Article Card"
      />
      <div className="CardArticle__details">
        <h2 className="CardArticle__details__header">{title}</h2>
        <div className="CardArticle__details__description">{description}</div>
        <div className="CardArticle__details__tags">
          {tags.map((tag) => (
            <ArticleTag>{tag}</ArticleTag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default CardArticle;
