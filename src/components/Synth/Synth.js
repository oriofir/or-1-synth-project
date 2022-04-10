import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Button } from "react-bootstrap";

function Synth() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <Song bpm={110} isPlaying={playing}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C3"]} volume={0}>
          {/* Browser-based synth */}
          <Instrument type="monoSynth" />
          {/* Feedback effect  */}
          <Effect type="feedbackDelay" />
        </Track>
      </Song>
      <Button
        variant="primary"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {" "}
        {playing ? "Stop sound" : "Play sound"}
      </Button>
    </div>
  );
}

export default Synth;
