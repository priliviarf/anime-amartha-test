import { Search } from '../../components';

const Home = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-8">
          <h2>Watch Popular Anime Here!</h2>
        </div>
        <div className="col-4">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
