// import React, { useState, useEffect } from "react";
// import { Form, Button, Alert, Modal } from "react-bootstrap";
// // import SynthCreate from "../SynthCreate/SynthCreate";
// import API_URL from "../../apiConfig";
// // import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SaveForm = ({
//   typeSynth,
//   filter,
//   delay,
//   distortion,
//   autoWah,
//   freeverb,
//   tremolo,
//   error,
// }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const navigate = useNavigate();

//   const initialSynthData = {
//     name: "",
//     synthType: typeSynth,
//     filterAmount: filter,
//     delayAmount: delay,
//     distorionAmout: distortion,
//     autoWahAmount: autoWah,
//     freeverbAount: freeverb,
//     tremoloAmount: tremolo,
//   };

//   const [newSynth, setNewSynth] = useState(initialSynthData);

//   const handleChange = (event) => {
//     setNewSynth(() => {
//       console.log(event);
//       return { ...newSynth, name: event.target.value };
//     });
//   };

//   const createNewSynth = async (event) => {
//     // event.preventDefault();
//     const formData = new FormData();
//     formData.append("json1", JSON.stringify(newSynth));
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Content-Type": "application/json",
//         },

//         mode: "cors",
//       });
//       console.log(response);
//       setNewSynth(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // useEffect(() => {
//   //   createNewSynth();
//   // }, []);

//   return (
//     <>
//       <Button
//         className="save"
//         variant="outline-dark"
//         style={{ width: 150 }}
//         onClick={handleShow}
//       >
//         Save
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Synth Create</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="name">
//             <Form.Label>Synth Name</Form.Label>
//             <Form.Control required autoFocus type="text" name="name" />
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="outline-dark" onClick={handleClose}>
//             Close
//           </Button>
//           <Button
//             variant="outline-dark"
//             handleSubmit={createNewSynth}
//             // disabled={error}
//           >
//             Save Synth
//           </Button>
//           {error && <Alert variant="danger">Please Enter a Name</Alert>}
//         </Modal.Footer>
//         <SynthCreate synthData={setNewSynth} />
//       </Modal>
//     </>
//   );
// };

// export default SaveForm;
