import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import API_URL from "../../apiConfig";

function SynthDetail(props) {
  const { id } = useParams();

  const [synth, setSynth] = useState({});

  const loadSynth = async () => {
    try {
      const response = await fetch(API_URL + `saved/${id}/`);
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        setSynth(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSynth();
    return;
  }, []);
  return (
    <div>
      <Navigate to="/" onClick={loadSynth} />
    </div>
  );
}

export default SynthDetail;
