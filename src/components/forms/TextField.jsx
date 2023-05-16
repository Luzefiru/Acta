import './TextField.css';

function TextField({ className, label, id, placeholder, value, onChange }) {
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
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default TextField;
