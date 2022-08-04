import React, { useState } from "react";
import axios from "axios";

import Banner from "../../static/assets/images/fire-banner.png";
import NavBar from "../components/NavBar";

export default function addElement() {
  const [Main, setMain] = useState("");
  const [Fire, setFire] = useState("");
  const [Water, setWater] = useState("");
  const [Air, setAir] = useState("");
  const [Earth, setEarth] = useState("");

  const clearState = () => {
    setMain("");
    setFire("");
    setWater("");
    setAir("");
    setEarth("");
  };

  const postElement = (event) => {
    axios
      .post(
        "http://localhost:5000/add-Element",
        {
          Main: Main,
          Fire: Fire,
          Water: Water,
          Air: Air,
          Earth: Earth,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    clearState();
    event.preventDefault();
  };

  return (
    <div className="add-spell">
      <img className="banner" src={Banner} />
      <div className="add-spell-page">
        <div>
          <h1 className="add-spell-title">Enter an elements data!</h1>
          <form className="add-spell-form" onSubmit={postElement}>
            <input
              value={Main}
              className="add-spell-form-input"
              onChange={(event) => setMain(event.target.value)}
              type="text"
              placeholder="Main"
            />
            <input
              value={Fire}
              className="add-spell-form-input"
              onChange={(event) => setFire(event.target.value)}
              type="text"
              placeholder="Fire"
            />
            <input
              value={Water}
              className="add-spell-form-input"
              onChange={(event) => setWater(event.target.value)}
              type="text"
              placeholder="Water"
            />
            <input
              value={Air}
              className="add-spell-form-input"
              onChange={(event) => setAir(event.target.value)}
              type="text"
              placeholder="Air"
            />
            <input
              value={Earth}
              className="add-spell-form-input"
              onChange={(event) => setEarth(event.target.value)}
              type="text"
              placeholder="Earth"
            />
            <button className="add-spell-form-button">Add element!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
