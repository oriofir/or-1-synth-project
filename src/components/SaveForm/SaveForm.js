import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import SynthCreate from "../SynthCreate/SynthCreate";

const SaveForm = ({ props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="save" variant="outline-dark" onClick={handleShow}>
        Save
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SaveForm;
