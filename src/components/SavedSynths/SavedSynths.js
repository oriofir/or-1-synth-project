import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Stack, Button, Card } from "react-bootstrap";
import API_URL from "../../apiConfig";
import "./SavedSynths.css";

function SavedSynths(props) {
  const [synths, setSynths] = useState([]);
  const [error, setError] = useState(false);

  const getSynthsList = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.status === 200) {
        const data = await response.json();
        setSynths(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSynthsList();
  }, []);

  if (!error && !synths.length) {
    return null;
  }

  if (error && !synths.length) {
    return <div>No Synths Saved!</div>;
  }

  return (
    <div>
      <h2>Saved Synths</h2>
      <Row xs={1} s={1}>
        {synths.map((synth) => {
          return (
            <Stack
              style={{
                display: "flex",

                alignItems: "center",
              }}
              key={synth.id}
              gap={2}
              className="col-md-5 mx-auto"
            >
              <Link to="/">
                <Button style={{ width: 150 }} variant="outline-dark">
                  {synth.name}
                </Button>
              </Link>
            </Stack>
          );
        })}
      </Row>
    </div>
  );
}

export default SavedSynths;
