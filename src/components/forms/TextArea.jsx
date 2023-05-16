import './TextArea.css';

function TextArea(props) {
  const { className, label, id, placeholder } = props;
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
      ></textarea>
    </div>
  );
}

export default TextArea;
