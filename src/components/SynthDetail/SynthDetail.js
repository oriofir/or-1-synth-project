import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Donut } from "react-dial-knob";
import { Button, Stack, ToggleButton, ButtonGroup } from "react-bootstrap";
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

  const [synth, setSynth] = useState({
    name: `${name}`,
    synth_type: `${setTypeSynth}`,
    filter_amount: `${setFilter}`,
    delay_amount: `${setDelay}`,
    distortion_amount: `${setDistortion}`,
    autowah_amount: `${setAutoWah}`,
    freeverb_amount: `${setFreeverb}`,
    tremolo_amount: `${setTremolo}`,
  });

  useEffect(() => {
    fetch(API_URL + `${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setSynth(data);
      });
  }, []);

  return (
    <div>
      <Link to={`/`} />
    </div>
  );
}

export default SynthDetail;
