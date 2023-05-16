import './TextArea.css';

function TextArea(props) {
  const { className, label, id, placeholder, value, onChange } = props;
  return (
    <div className={`TextArea ${className}`}>
      <label className="TextArea__label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="TextArea__textarea"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        rows="6"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
