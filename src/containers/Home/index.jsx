import { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { Card, Offcanvas, Search } from '../../components';
import { endpoints } from '../../configuration';
import { useAxios } from '../../hooks';

const Home = () => {
  const { data, loaded } = useAxios(endpoints.getAnimes, 'get');

  const offcanvasRef = useRef();

  const showDetail = (anime) => {
    offcanvasRef.current?.setDataShow(anime);
    offcanvasRef.current?.handleShow();
  };

  return (
    <>
      <Offcanvas ref={offcanvasRef} />

      <div className="container pt-5">
        <div className="header">
          <div>
            <h2>Watch Popular Anime Here!</h2>
          </div>
          <div>
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
                  <div
                    onClick={() => showDetail(anime)}
                    className="card-wrapper col-sm-12 col-md-6 col-lg-3 mb-3"
                    key={key}
                  >
                    <Card anime={anime} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
