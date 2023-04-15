import './TextArea.css';

function TextArea(props) {
  const { className, label, id, placeholder } = props;
  return (
    <div className={`TextArea ${className}`}>
      <label className="TextArea__label" for={id}>
        {label}
      </label>
      <textarea
        className="TextArea__textarea"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        rows="5"
      ></textarea>
    </div>
  );
}

export default TextArea;
