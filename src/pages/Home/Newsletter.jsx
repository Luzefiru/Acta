import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="Newsletter">
      <div className="Newsletter--wrapper">
        <h3 className="Newsletter__heading">Subscribe to our Newsletter</h3>
        <div className="Newsletter__input--wrapper">
          <input className="Newsletter__input"></input>
          <button className="Newsletter__input__button">Send</button>
        </div>
      </div>
    </section>
  );
}
