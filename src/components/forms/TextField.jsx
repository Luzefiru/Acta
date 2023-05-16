import './TextField.css';

function TextField(props) {
  const { className, label, id, placeholder } = props;
  return (
    <div className={`TextField ${className}`}>
      <label className="TextField__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="TextField__input"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default TextField;
