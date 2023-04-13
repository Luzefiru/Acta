import "./Footer.css";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Logo color="var(--white)" hoverColor="var(--white)" />
        <div className="product">
          <h3>Product</h3>
          <a>All Jobs</a>
          <a>Companies</a>
          <a>Candidates</a>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <a>Blog</a>
          <a>User guides</a>
        </div>
        <div className="company">
          <h3>Company</h3>
          <a>About</a>
          <a>Join us</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Acta</p>
      </div>
    </div>
  );
}

export default Footer;
