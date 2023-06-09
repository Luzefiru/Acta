import './CardNews.css';

function CardNews(props) {
  const { imgSrc, title, datePosted } = props;

  return (
    <article className="CardNews">
      <img className="CardNews__img" src={imgSrc} alt="News Card" />
      <div className="CardNews__details">
        <h4 className="CardNews__details__header">{title}</h4>
        <div className="CardNews__details__date">{datePosted}</div>
      </div>
    </article>
  );
}

export default CardNews;
