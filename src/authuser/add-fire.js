import React, { useState } from "react";
import axios from "axios";

import Banner from "../../static/assets/images/fire-banner.png";
import NavBar from "../components/NavBar";

export default function addFireElement() {
  const [blank, setBlank] = useState("");
  const [water, setWater] = useState("");
  const [air, setAir] = useState("");
  const [earth, setEarth] = useState("");

  const clearState = () => {
    setBlank("");
    setWater("");
    setAir("");
    setEarth("");
  };

  const postFireElement = (event) => {
    axios
      .post(
        "http://localhost:5000/add-FireElement",
        {
          blank: blank,
          water: water,
          air: air,
          earth: earth,
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
          <form className="add-spell-form" onSubmit={postFireElement}>
            <input
              value={blank}
              className="add-spell-form-input"
              onChange={(event) => setBlank(event.target.value)}
              type="text"
              placeholder="Blank"
            />
            <input
              value={water}
              className="add-spell-form-input"
              onChange={(event) => setWater(event.target.value)}
              type="text"
              placeholder="Water"
            />
            <input
              value={air}
              className="add-spell-form-input"
              onChange={(event) => setAir(event.target.value)}
              type="text"
              placeholder="Air"
            />
            <input
              value={earth}
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
