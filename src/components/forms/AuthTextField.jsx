import './AuthTextField.css';

const AuthTextField = (props) => {
  const { label, placeholder, type = 'text' } = props;

  return (
    <div class="AuthTextField">
      <p class="AuthTextField__label">{label}</p>
      <input disabled type={type} placeholder={placeholder} />
    </div>
  );
};

export default AuthTextField;
