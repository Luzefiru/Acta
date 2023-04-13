import ContainedButton from '../../components/ui/ContainedButton.jsx';
import GhostButton from '../../components/ui/GhostButton.jsx';

function Home() {
  return (
    <div className="Home">
      I'm in Home!
      <ContainedButton content="Edit" />
      <GhostButton content="Edit" />
    </div>
  );
}

export default Home;
