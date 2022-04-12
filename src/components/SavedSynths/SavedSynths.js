import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-router-dom";
import SaveForm from "../SaveForm/SaveForm";
import API_URL from "../../apiConfig";

function SavedSynths(props) {
  return (
    <div>
      <h2>Saved Synths</h2>
      <SaveForm />
    </div>
  );
}

export default SavedSynths;
