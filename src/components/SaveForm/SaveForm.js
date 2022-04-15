import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import SynthCreate from "../SynthCreate/SynthCreate";
import API_URL from "../../apiConfig";

const SaveForm = ({
  typeSynth,
  filter,
  delay,
  distortion,
  autoWah,
  freeverb,
  tremolo,
  error,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialSynthData = {
    name: "",
    synthType: typeSynth,
    filterAmount: filter,
    delayAmount: delay,
    distorionAmout: distortion,
    autoWahAmount: autoWah,
    freeverbAount: freeverb,
    tremoloAmount: tremolo,
  };

  const [newSynth, setNewSynth] = useState(initialSynthData);

  const handleChange = (event) => {
    setNewSynth((prevState) => {
      console.log(event);
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <Button
        className="save"
        variant="outline-dark"
        style={{ width: 150 }}
        onClick={handleShow}
      >
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
          <Form.Group controlId="name">
            <Form.Label>Synth Name</Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" disabled={error}>
            Save Synth
          </Button>
          {error && <Alert variant="danger">Please Enter a Name</Alert>}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SaveForm;
