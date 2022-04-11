import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import Tone from "tone";
import { Donut } from "react-dial-knob";
import {
  Button,
  Stack,
  DropdownButton,
  Dropdown,
  SplitButton,
  ButtonGroup,
} from "react-bootstrap";

function Synth() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0);

  return (
    <div>
      <Song bpm={110} isPlaying={playing} volume={volume}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C3", null, "D2", null, "E3"]}>
          {/* Browser-based synth */}
          <Instrument
            type="monoSynth"
            envelope={{
              attack: 5,
              decay: 10,
              sustain: 10,
              release: 10,
            }}
          />
          {/* Feedback effect  */}
          {/* <Effect type="feedbackDelay" /> */}
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
      <Stack direction="horizontal" gap={3}>
        <Donut
          className="volume"
          diameter={100}
          min={0}
          max={10}
          step={1}
          value={volume}
          theme={{
            donutColor: "black",
          }}
          thickness={20}
          onValueChange={setVolume}
          ariaLabelledBy={"Volume"}
        >
          <label id={"Volume"}>Volume</label>
        </Donut>
        <Donut
          className="attack"
          diameter={100}
          min={0}
          max={10}
          step={1}
          value={attack}
          theme={{
            donutColor: "black",
          }}
          onValueChange={setAttack}
          ariaLabelledBy={"Attack"}
        >
          <label id={"Attack"}>Attack</label>
        </Donut>
      </Stack>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Synth;
