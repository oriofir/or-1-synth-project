import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import API_URL from "../../apiConfig";

function SynthDetail(
  name,
  setTypeSynth,
  setFilter,
  setDelay,
  setDistortion,
  setAutoWah,
  setFreeverb,
  setTremolo
) {
  const { id } = useParams();

  const [synth, setSynth] = useState({});

  useEffect(() => {
    // fetch by id
    // check if you're being passed a saved synth, pass the set state

    fetch(API_URL + `${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Link to={`/${id}`} />
    </div>
  );
}

export default SynthDetail;
