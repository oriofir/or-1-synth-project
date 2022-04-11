import React, { useState } from "react";
import "./App.css";
import Synth from "./components/Synth/Synth";

function App() {
  return (
    <div>
      OR-1 Synthesizer
      <Synth className="synth" />
    </div>
  );
}

export default App;
