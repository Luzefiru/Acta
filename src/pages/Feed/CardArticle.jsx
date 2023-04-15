import './CardArticle.css';

function CardArticle() {
  return (
    <article className="CardArticle">
      <img
        className="CardArticle__img"
        src="https://images.unsplash.com/photo-1489100517551-92a468b736f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="Article Card"
      />
      <div className="CardArticle__details">
        <h2 className="CardArticle__details__header">
          How to Use Acta: The Complete Guide for Marketers
        </h2>
        <div className="CardArticle__details__description">
          I started writing on Acta in November 2019 with the primary goal of
          earning a side income. I decided to write about my areas of expertise:
          software development, machine learning, and life in a tech startup.
        </div>
      </div>
    </article>
  );
}

export default CardArticle;
