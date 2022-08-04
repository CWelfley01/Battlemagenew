import React, { useState } from "react";
import axios from "axios";

export default function addFormElement() {
  const [element, setElement] = useState("");
  const [shot, setShot] = useState("");
  const [beam, setBeam] = useState("");
  const [wall, setWall] = useState("");
  

  const clearState = () => {
    setElement("");
    setShot("");
    setBeam("");
    setWall("");
    
  };

  const postFormElement = (event) => {
    axios
      .post("http://127.0.0.1:5000/add-FormElement", {
        element: element,
        shot: shot,
        beam: beam,
        wall: wall,
        
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
      <form className="add-spell-form" onSubmit={postFormElement}>
      <input
          value={element}
          className="add-spell-form-input"
          onChange={(event) => setElement(event.target.value)}
          type="text"
          placeholder="Element"
        />
        <input
          value={shot}
          className="add-spell-form-input"
          onChange={(event) => setShot(event.target.value)}
          type="text"
          placeholder="Shot"
        />
        <input
          value={beam}
          className="add-spell-form-input"
          onChange={(event) => setBeam(event.target.value)}
          type="text"
          placeholder="Beam"
        />
        <input
          value={wall}
          className="add-spell-form-input"
          onChange={(event) => setWall(event.target.value)}
          type="text"
          placeholder="Wall"
        />
        <button className="add-spell-form-button">Add element!</button>
      </form>
    </div>
  );
}
