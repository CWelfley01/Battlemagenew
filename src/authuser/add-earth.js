import React, { useState } from "react";
import axios from "axios";

export default function addEarthElement() {
  const [blank, setBlank] = useState("");
  const [fire, setFire] = useState("");
  const [water, setWater] = useState("");
  const [air, setAir] = useState("");
  

  const clearState = () => {
    setBlank("");
    setFire("");
    setWater("");
    setAir("");
    
  };

  const postEarthElement = (event) => {
    axios
      .post("http://localhost:5000/add-EarthElement", {
        blank: blank,
        fire: fire,
        water: water,
        air: air,
        
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
      <form className="add-spell-form" onSubmit={postEarthElement}>
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
          onChange={(event) => setAir(event.target.value)}
          type="text"
          placeholder="Air"
        />
        <button className="add-spell-form-button">Add element!</button>
      </form>
    </div>
  );
}