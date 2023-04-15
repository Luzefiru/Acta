import './TextField.css';

function TextField(props) {
  const { label, id, placeholder } = props;
  return (
    <div className="TextField">
      <label className="TextField__label" for={id}>
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
