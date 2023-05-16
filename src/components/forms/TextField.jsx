import './TextField.css';

function TextField({
  className,
  label,
  id,
  placeholder,
  value,
  onChange,
  disabled = false,
}) {
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
        disabled={disabled}
      ></input>
    </div>
  );
}

export default TextField;
