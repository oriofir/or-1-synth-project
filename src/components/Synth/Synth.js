import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Donut } from "react-dial-knob";
import { Button, Stack, ToggleButton, ButtonGroup } from "react-bootstrap";
import "./Synth.css";
import SaveForm from "../SaveForm/SaveForm";

function Synth() {
  // const initialEnvelope = {
  //   attack: 0,
  //   decay: 0,
  //   sustain: 0,
  //   release: 0,
  // };

  // const [envelopeChange, setEnvelopeChange] = useState(initialEnvelope);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(-5);
  const [filter, setFilter] = useState(0);
  const [delay, setDelay] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0);
  const [typeSynth, setTypeSynth] = useState("monoSynth");
  const [envelope, setEnvelope] = useState(0);
  const [oscillatorType, setOscillatorType] = useState("sine");

  // const changeAttack = (event) => {
  //   setEnvelopeChange((prevState) => {
  //     return { ...prevState, [event.target.attack]: event.target.value };
  //   });
  // };

  const synthType = [
    { name: "MonoSynth", value: "monoSynth" },
    { name: "DuoSynth", value: "duoSynth" },
    { name: "FMSynth", value: "fmSynth" },
  ];

  const envelopeType = [
    { name: "Attack", value: attack },
    { name: "Decay", value: decay },
    { name: "Sustain", value: sustain },
    { name: "Release", value: release },
  ];

  return (
    <div>
      <Song bpm={110} isPlaying={playing} volume={volume}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C2", null]}>
          {/* Browser-based synth */}
          <Instrument type={typeSynth} envelope={envelope} />
          {/* Feedback effect  */}
          <Effect type="autoFilter" wet={filter} />
          <Effect type="feedbackDelay" wet={delay} />
        </Track>
      </Song>

      <Stack className="controlStack" direction="horizontal" gap={4}>
        <Donut
          className="volume"
          diameter={125}
          min={0}
          max={10}
          step={1}
          value={volume}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          thickness={20}
          onValueChange={setVolume}
          ariaLabelledBy={"Volume"}
        >
          <label id={"Volume"}>Volume</label>
        </Donut>
        <Donut
          className="filter"
          diameter={125}
          min={0}
          max={1}
          step={0.25}
          value={filter}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setFilter}
          ariaLabelledBy={"Attack"}
        >
          <label id={"Filter"}>Filter</label>
        </Donut>
        <Donut
          className="delay"
          diameter={125}
          min={0}
          max={1}
          step={0.25}
          value={delay}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setDelay}
          ariaLabelledBy={"Delay"}
        >
          <label id={"delay"}>Delay</label>
        </Donut>
      </Stack>

      <Stack className="envelopeStack" direction="horizontal" gap={4}>
        {envelopeType.map((envelope, idx) => {
          return (
            <Donut
              key={idx}
              id={`envelope-${idx}`}
              diameter={100}
              min={0}
              max={1}
              step={0.25}
              value={envelope.value}
              theme={{
                donutColor: "black",
                donutThickness: 15,
              }}
              onValueChange={(e) => setEnvelope(e.currentTarget.value)}
              ariaLabelledBy={envelope.name}
            >
              <label id={`envelope-${idx}`}>{envelope.name}</label>
            </Donut>
          );
        })}
      </Stack>
      <ButtonGroup className="mb-2">
        {synthType.map((synth, idx) => (
          <ToggleButton
            key={idx}
            id={`synth-${idx}`}
            type="radio"
            variant="primary"
            name="synthType"
            value={synth.value}
            checked={typeSynth === synth.value}
            onChange={(e) => setTypeSynth(e.currentTarget.value)}
          >
            {synth.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <Button
        className="play"
        variant="primary"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {" "}
        {playing ? "Stop" : "Play"}
      </Button>
      <Button
        className="save"
        variant="primary"
        onClick={() => {
          return <SaveForm />;
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default Synth;

{
  /* <Donut
          className="attack"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={attack}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setAttack}
          ariaLabelledBy={"Attack"}
        >
          <label id={"Attack"}>Attack</label>
        </Donut>
        <Donut
          className="decay"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={decay}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setDecay}
          ariaLabelledBy={"Decay"}
        >
          <label id={"Decay"}>Decay</label>
        </Donut>
        <Donut
          className="sustain"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={sustain}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setSustain}
          ariaLabelledBy={"Sustain"}
        >
          <label id={"Sustain"}>Sustain</label>
        </Donut> */
}
