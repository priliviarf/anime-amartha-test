import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Search = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Search
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Anime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="genres">
              <Form.Label>Genres</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Select aria-label="type">
                    <option value="tv">TV</option>
                    <option value="movie">Movie</option>
                    <option value="music">Music</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Select aria-label="status">
                    <option value="airing">Airing</option>
                    <option value="complete">Complete</option>
                    <option value="upcoming">Upcoming</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="producers">
              <Form.Label>Producers</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="primary" onClick={handleClose}>
              Search
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Search;
