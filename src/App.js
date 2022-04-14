import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Synth from "./components/Synth/Synth";
import SavedSynths from "./components/SavedSynths/SavedSynths";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Synth className="synth" />}></Route>

          <Route path="/saved" element={<SavedSynths />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
