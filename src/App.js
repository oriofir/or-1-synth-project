import React, { useState } from "react";
import "./App.css";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Button } from "react-bootstrap";

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      Working
      <Song bpm={110} isPlaying={playing}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C3", null, "A2", "F3"]} volume={2}>
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

export default App;
