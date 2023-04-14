import './TextField.css';

const TextField = (props) => {
  const { label, placeholder, type = 'text' } = props;

  return (
    <div className="TextField">
      <p className="TextField__label">{label}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
