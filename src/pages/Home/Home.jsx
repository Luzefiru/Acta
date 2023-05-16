import './Home.css';
import HeroIllustration from '../../assets/hero-illustration.svg';
import ContainedButton from '../../components/ui/ContainedButton';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter.jsx';

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
            <ContainedButton padding="14px 24px">Sign up Now</ContainedButton>
          </Link>
        </div>
      </main>
      <Newsletter />
    </div>
  );
}

export default Home;
