import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import API_URL from "../../apiConfig";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function SynthCreate({
  name,
  setName,
  typeSynth,
  filter,
  delay,
  distortion,
  autoWah,
  freeverb,
  tremolo,
  error,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const initialSynthData = {
    name: name,
    synthType: typeSynth,
    filterAmount: filter,
    delayAmount: delay,
    distorionAmout: distortion,
    autoWahAmount: autoWah,
    freeverbAount: freeverb,
    tremoloAmount: tremolo,
  };
  console.log("initial synth data", initialSynthData);

  const [newSynth, setNewSynth] = useState(initialSynthData);

  const handleChange = (event) => {
    setName((newSynth) => {
      // console.log(event);
      return { ...newSynth, [event.target.name]: event.target.value };
    });
  };

  const createNewSynth = async (event) => {
    // event.preventDefault();
    const formData = new FormData();
    console.log("synth", newSynth);
    formData.append("synth", JSON.stringify(newSynth));
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,

        headers: {
          "Content-Type": "application/json",
        },

        mode: "cors",
      });
      console.log(response);
      setNewSynth(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("new synth", newSynth);

  useEffect(() => {
    createNewSynth();
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Synth Create</Modal.Title>
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
          <Button
            variant="outline-dark"
            // handleSubmit={handleChange}
            onClick={createNewSynth}

            // disabled={error}
          >
            Save Synth
          </Button>
          {error && <Alert variant="danger">Please Enter a Name</Alert>}
        </Modal.Footer>
      </Modal>
      <Button
        className="save"
        variant="outline-dark"
        style={{ width: 150 }}
        onClick={handleShow}
      >
        Save
      </Button>
    </>
  );
}

export default SynthCreate;
