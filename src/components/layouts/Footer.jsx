import './Footer.css';
import Logo from './Logo';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer--wrapper">
        <Logo color="var(--white)" hoverColor="var(--white)" />
        <div className="Footer__product">
          <h3>Product</h3>
          <a>All Jobs</a>
          <a>Companies</a>
          <a>Candidates</a>
        </div>
        <div className="Footer__resources">
          <h3>Resources</h3>
          <a>Blog</a>
          <a>User guides</a>
        </div>
        <div className="Footer__company">
          <h3>Company</h3>
          <a>About</a>
          <a>Join us</a>
        </div>
      </div>
      <div className="Footer__copyright">
        <p>© 2023 Acta</p>
      </div>
    </div>
  );
}

export default Footer;
