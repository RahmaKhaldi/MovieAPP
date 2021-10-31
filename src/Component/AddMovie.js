import { Modal, Button, Form ,Dropdown,DropdownButton} from "react-bootstrap";
import { useState } from "react";

function AddMovie({ movies, setMovies }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [posterURL, setPosterURL] = useState(" ");
  const [rate, setRate] = useState(0);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    handleClose();
  };
  return (
    <>
      <Button
        variant="primary"
        style={{ marginLeft: 1195 }}
        onClick={handleShow}
      >
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            
            <Form.Label>posterURL</Form.Label>

            <Form.Control
              type="text"
              placeholder="posterURL"
              
              onChange={(e) => setPosterURL(e.target.value)}
            />
             <br />
             <Form.Label>Rating</Form.Label>
             <Form.Control
              type="number"
              placeholder="Rating"
              onChange={(e) => setRate(e.target.value)}
            />
        
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={() => {
              addMovie({ title, description, posterURL,rate  });
              handleClose();
            }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
