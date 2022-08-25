import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Col, Row, Stack, Button, Card } from "react-bootstrap";
import API_URL from "../../apiConfig";
import "./SavedSynths.css";
import axios from "axios";

function SavedSynths(props) {
  const [synths, setSynths] = useState([]);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const getSynthsList = async () => {
    try {
      const response = await fetch(API_URL);

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setSynths(data);
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

  const handleDelete = async () => {
    const confirm = window.confirm("Delete Synth?");
    if (confirm) {
      try {
        const response = await axios.delete(API_URL + `${id}`, synths);
        if (response.status == 200) {
          navigate("/saved");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>Saved Synths</h2>
      <Row xs={1} s={1}>
        {synths.map((synth) => {
          return (
            <Stack key={synth.id} gap={2} className="col-md-12 mx-auto">
              <Link to={`/${synth.id}`}>
                <Button style={{ minWidth: "20rem" }} variant="outline-dark">
                  {synth.name}
                </Button>
              </Link>
              <Link to={`/saved`}>
                <Button
                  className="delete"
                  variant="dark"
                  onClick={() => handleDelete(synth.id)}
                >
                  Delete
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
