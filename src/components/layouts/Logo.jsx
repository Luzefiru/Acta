import './Logo.css';
import LogoBlack from '../../assets/logo-black.svg';
import LogoWhite from '../../assets/logo-white.svg';

const Logo = (props) => {
  const { white = false } = props;
  return (
    <img className="Logo" src={white ? LogoWhite : LogoBlack} alt="Acta" />
  );
};

export default Logo;
