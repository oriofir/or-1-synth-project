import React, { useState } from "react";
import "./App.css";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Button } from "bootstrap";

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      Working
      <Song bpm={90} isPlaying={playing}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C3", null, "A3", "F3"]} volume={2}>
          {/* Browser-based synth */}
          <Instrument type="monoSynth" />
          {/* Feedback effect  */}
          <Effect type="feedbackDelay" />
        </Track>
      </Song>
      <button
        variant="primary"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {" "}
        {playing ? "Stop sound" : "Play sound"}
      </button>
    </div>
  );
}

export default App;
