import React, { useState } from "react";
import axios from "axios";

export default function addWaterElement() {
  const [blank, setBlank] = useState("");
  const [fire, setFire] = useState("");
  const [air, setAir] = useState("");
  const [earth, setEarth] = useState("");
  

  const clearState = () => {
    setBlank("");
    setFire("");
    setAir("");
    setEarth("");
    
  };

  const postWaterElement = (event) => {
    axios
      .post("http://localhost:5000/add-WaterElement", {
        blank: blank,
        fire: fire,
        air: air,
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
      <form className="add-spell-form" onSubmit={postWaterElement}>
        <input
          value={blank}
          className="add-spell-form-input"
          onChange={(event) => setBlank(event.target.value)}
          type="text"
          placeholder="Blank"
        />
        <input
          value={fire}
          className="add-spell-form-input"
          onChange={(event) => setFire(event.target.value)}
          type="text"
          placeholder="Fire"
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
  );
}
