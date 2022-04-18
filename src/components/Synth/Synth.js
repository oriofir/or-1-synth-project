import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Donut } from "react-dial-knob";
import { Link, useParams } from "react-router-dom";
import { Button, Stack, ToggleButton, ButtonGroup } from "react-bootstrap";
import "./Synth.css";
// import SavedSynths from "../SavedSynths/SavedSynths";
import SynthCreate from "../SynthCreate/SynthCreate";
// import API_URL from "../../apiConfig";
import SynthDetail from "../SynthDetail/SynthDetail";

function Synth() {
  // const initialEffect = {
  //   distortion: 0,
  //   autoWah: 0,
  //   freeverb: 0,
  //   tremolo: 0,
  // };

  function touchStarted() {
    new AudioContext();
  }

  const { id } = useParams;

  // const [envelopeChange, setEnvelopeChange] = useState(initialEnvelope);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(-5);
  const [filter, setFilter] = useState(0);
  const [delay, setDelay] = useState(0);
  const [distortion, setDistortion] = useState(0);
  const [autoWah, setAutoWah] = useState(0);
  const [freeverb, setFreeverb] = useState(0);
  const [tremolo, setTremolo] = useState(0);
  const [typeSynth, setTypeSynth] = useState("duoSynth");
  const [name, setName] = useState("");
  // const [effect, setEffect] = useState(initialEffect);

  // const changeAttack = (event) => {
  //   setEnvelopeChange((prevState) => {
  //     return { ...prevState, [event.target.attack]: event.target.value };
  //   });
  // };

  const synthType = [
    { name: "MonoSynth", value: "monoSynth" },
    { name: "DuoSynth", value: "duoSynth" },
    { name: "FMSynth", value: "fmSynth" },
    { name: "AMSynth", value: "amSynth" },
    { name: "PolySynth", value: "polySynth" },
  ];

  // const handleChange = (value, property) => {
  //   console.log(value, property);
  //   setEffect({ ...effect, [property]: value });
  // }

  // const effectType = [
  //   { name: "distortion", value: "distortion" },
  //   { name: "autoWah", value: "autoWah" },
  //   { name: "freeverb", value: "freeverb" },
  //   { name: "tremolo", value: "tremolo" },
  // ];

  // useEffect(() => {
  //   // fetch by id
  //   // check if you're being passed a saved synth, pass the set state

  //   fetch(API_URL + `${id}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <Button
        className="play"
        variant="outline-dark"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {" "}
        {playing ? "Stop" : "Play"}
      </Button>
      <SynthCreate
        name={name}
        setName={setName}
        typeSynth={typeSynth}
        filter={filter}
        delay={delay}
        distortion={distortion}
        autoWah={autoWah}
        freeverb={freeverb}
        tremolo={tremolo}
      />
      <Link to="/:id">
        <SynthDetail
          setTypeSynth={setTypeSynth}
          setFilter
          setDelay
          setDistortion
          setAutoWah
          setFreeverb
          setTremolo
        />
      </Link>

      <Song bpm={110} isPlaying={playing} volume={volume}>
        {" "}
        {/* Track with sequenced steps */}
        <Track steps={["C2", null]}>
          {/* Browser-based synth */}
          <Instrument type={typeSynth} />
          {/* Feedback effect  */}
          <Effect type="autoFilter" wet={filter} />
          <Effect type="feedbackDelay" wet={delay} />
          <Effect type="distortion" wet={distortion} />
          <Effect type="autoWah" wet={autoWah} />
          <Effect type="freeverb" wet={freeverb} />
          <Effect type="tremolo" wet={tremolo} />
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
        <Donut
          className="distortion"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={distortion}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setDistortion}
          ariaLabelledBy={"Distortion"}
        >
          <label id={"distortion"}>Distortion</label>
        </Donut>
        <Donut
          className="AutoWah"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={autoWah}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setAutoWah}
          ariaLabelledBy={"AutoWah"}
        >
          <label id={"autoWah"}>AutoWah</label>
        </Donut>
        <Donut
          className="freeverb"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={freeverb}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setFreeverb}
          ariaLabelledBy={"freeverb"}
        >
          <label id={"freeverb"}>Reverb</label>
        </Donut>
        <Donut
          className="tremolo"
          diameter={100}
          min={0}
          max={1}
          step={0.25}
          value={tremolo}
          theme={{
            donutColor: "black",
            donutThickness: 15,
          }}
          onValueChange={setTremolo}
          ariaLabelledBy={"tremolo"}
        >
          <label id={"tremolo"}>Tremolo</label>
        </Donut>
      </Stack>
      <ButtonGroup className="mb-2">
        {synthType.map((synth, idx) => (
          <ToggleButton
            key={idx}
            id={`synth-${idx}`}
            type="checkbox"
            variant={idx ? "outline-dark" : "outline-dark"}
            name="synthType"
            value={synth.value}
            checked={typeSynth === synth.value}
            onChange={(e) => setTypeSynth(e.currentTarget.value)}
          >
            {synth.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Synth;

/* {effectType.map((property, idx) => {
          return (
            <Donut
              key={idx}
              id={property.name}
              diameter={100}
              min={0}
              max={1}
              step={0.25}
              value={effect[property.name]}
              theme={{
                donutColor: "black",
                donutThickness: 15,
              }}
              onValueChange={(value) => {
                handleChange(value, property.name);
              }}
              ariaLabelledBy={property.name}
            >
              <label id={`property-${idx}`}>{property.name}</label>
            </Donut>
          );
        })} */
