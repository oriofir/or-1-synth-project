import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SaveForm from "../SaveForm/SaveForm";
import API_URL from "../../apiConfig";

function SynthCreate(props) {
  const initialSynthData = {
    name: "",
    synthType: "",
    filterAmount: 0,
    delayAmount: 0,
  };

  const [newSynth, setNewSynth] = useState(initialSynthData);

  const handleChange = (event) => {
    setNewSynth((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const createSynth = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  };

  return (
    <div>
      <SynthForm
        handleSubmit={createSynth}
        handleChange={handleChange}
        formData={newSynth}
      />
    </div>
  );
}

export default SynthCreate;
