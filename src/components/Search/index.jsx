import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Search = ({ onSearch }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    onSearch();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Search here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title>Modal heading</Modal.Title>
          <div>Woohoo, you're reading this text in a modal!</div>

          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Search;
