import './CardNews.css';
import ArticleTag from '../../components/ui/ArticleTag';

function CardNews(props) {
  const { imgSrc, header, tags } = props;

  return (
    <article className="CardNews">
      <img className="CardNews__img" src={imgSrc} alt="News Card" />
      <div className="CardNews__details">
        <h4 className="CardNews__details__header">{header}</h4>
        <div className="CardNews__details__header">
          {tags.map((tag) => (
            <ArticleTag>{tag}</ArticleTag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default CardNews;
