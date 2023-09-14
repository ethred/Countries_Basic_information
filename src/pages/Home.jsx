import Searchbox from '../components/Searchbox';
import Countries from '../components/Countries';

function Home() {
  return (
    <div className="homeContainer">
      <Searchbox />
      <Countries />
    </div>
  );
}

export default Home;
