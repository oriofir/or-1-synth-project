import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Synth from "./components/Synth/Synth";
import SavedSynths from "./components/SavedSynths/SavedSynths";
import Navigation from "./components/Navigation/Navigation";
import SynthDetail from "./components/SynthDetail/SynthDetail";
import PianoRoll from "./components/PianoRoll/PianoRoll";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Synth className="synth" />}></Route>
          <Route path="/" element={<PianoRoll className="pianoRoll" />}></Route>
          <Route path="/saved" element={<SavedSynths />}></Route>
          <Route path="/:id" element={<SynthDetail />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
