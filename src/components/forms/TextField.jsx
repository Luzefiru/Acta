import './TextField.css';

const TextField = (props) => {
  const { label, placeholder, type = 'text' } = props;

  return (
    <div class="TextField">
      <p class="TextField__label">{label}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
