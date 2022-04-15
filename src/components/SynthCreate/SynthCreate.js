import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SaveForm from "../SaveForm/SaveForm";
// import API_URL from "../../apiConfig";

function SynthCreate(props) {
  const createSynth = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  };

  return <div></div>;
}

export default SynthCreate;
