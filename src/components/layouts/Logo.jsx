import './Logo.css';
import LogoBlack from '../../assets/logo-black.svg';
import LogoWhite from '../../assets/logo-white.svg';

const Logo = (props) => {
  const {
    isWhite = false,
    isWordmark = true,
    width = '40px',
    fontSize = '1.7rem',
  } = props;

  return (
    <div className="Logo">
      <img
        className="Logo__img"
        style={{ width: width, height: width }}
        src={isWhite ? LogoWhite : LogoBlack}
        alt="Acta"
      />
      {isWordmark ? (
        <span className="Logo__wordmark" style={{ fontSize: fontSize }}>
          Acta
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logo;
