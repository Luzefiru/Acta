import "./Home.css";
import HeroIllustration from "../../assets/hero-illustration.svg";
import ContainedButton from "../../components/ui/ContainedButton";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <main className="Home__hero">
        <img
          src={HeroIllustration}
          alt="Bloggers Creating a Page"
          class="Home__hero__img"
        />
        <div class="Home__hero__headline">
          Empower Your Blogging Journey with Acta
          <div class="Home__hero__headline__subtext">
            So what are you waiting for? Sign up for Acta today and start
            sharing your ideas with the world! It's quick, easy, and completely
            free - and who knows where it could take you?
          </div>
          <Link to="/auth">
            <ContainedButton padding="14px 24px">Sign Up Now</ContainedButton>
          </Link>
        </div>
      </main>
      <div className="Home__feature__cards">
        <FeatureCard content="Read latest news and articles" number="#1" />
        <FeatureCard content="Post creation and sharing" number="#2" />
        <FeatureCard content="Numerous article tag options" number="#3" />
        <FeatureCard content="Interactive profiles" number="#4" />
      </div>
    </div>
  );
}

export default Home;
