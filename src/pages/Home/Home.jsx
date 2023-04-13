import ContainedButton from "../../components/ui/ContainedButton.jsx";
import GhostButton from "../../components/ui/GhostButton.jsx";
import Footer from "../../components/layouts/Footer.jsx";

function Home() {
  return (
    <div className="Home">
      I'm in Home!
      <ContainedButton />
      <GhostButton />
      <Footer />
    </div>
  );
}

export default Home;
