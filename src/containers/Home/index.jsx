import { Spinner } from 'react-bootstrap';
import { Card, Search } from '../../components';
import { endpoints } from '../../configuration';
import { useAxios } from '../../hooks';

const Home = () => {
  const { data, loaded } = useAxios(endpoints.getAnimes, 'get');

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-8">
          <h2>Watch Popular Anime Here!</h2>
        </div>
        <div className="col-4">
          <Search onSearch={() => {}} />
        </div>
      </div>

      <div className="pt-5">
        {!loaded ? (
          <Spinner></Spinner>
        ) : (
          <>
            <div className="row">
              {data?.data?.map((anime, key) => (
                <div key={key} className="col-2 mb-3">
                  <Card anime={anime} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
