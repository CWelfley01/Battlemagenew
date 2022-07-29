import React, { useState } from "react";
import axios from "axios";

export default function addWaterElement() {
  const [blank, setBlank] = useState("");
  const [fire, setFire] = useState("");
  const [water, setWater] = useState("");
  const [earth, setEarth] = useState("");
  

  const clearState = () => {
    setBlank("");
    setFire("");
    setWater("");
    setEarth("");
    
  };

  const postAirElement = (event) => {
    axios
      .post("http://localhost:5000/add-AirElement", {
        blank: blank,
        fire: fire,
        Water: Water,
        earth: earth,
        
      },{
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    clearState();
    event.preventDefault();
  };

  return (
    <div className="add-spell">
      <h1 className="add-spell-title">Enter an elements data!</h1>
      <form className="add-spell-form" onSubmit={postAirElement}>
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
          onChange={(event) => setFire(event.target.value)}
          type="text"
          placeholder="Fire"
        />
        <input
          value={air}
          className="add-spell-form-input"
          onChange={(event) => setWater(event.target.value)}
          type="text"
          placeholder="Water"
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
  );
}

