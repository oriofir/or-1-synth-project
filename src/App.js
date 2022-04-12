import React, { useState } from "react";
import "./App.css";
import Synth from "./components/Synth/Synth";

function App() {
  return (
    <div>
      <h1>OR-1 Synthesizer</h1>
      <Synth className="synth" />
    </div>
  );
}

export default App;
