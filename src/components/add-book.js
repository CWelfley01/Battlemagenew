import React, { useState } from "react";
import axios from "axios";

export default function addSpell() {
  const [name, setSpellname] = useState("");
  const [author, setAttackmod] = useState("");
  const [price, setDefencemod] = useState("");
  const [description, setDescription] = useState("");
  const [specialeffect, setSpecialeffect] = useState("");

  const clearState = () => {
    setSpellname("");
    setAttackmod("");
    setDefencemod("");
    setDescription("");
    setSpecialeffect("");
  };

  const postSpell = (event) => {
    axios
      .post("http://localhost:5000/spell/add", {
        spellname: spellname,
        attackmod: attackmod,
        defencemod: defencemod,
        description: description,
        specialeffect: specialeffect,
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
      <h1 className="add-spell-title">Enter a spell</h1>
      <form className="add-spell-form" onSubmit={postSpell}>
        <input
          value={spellname}
          className="add-spell-form-input"
          onChange={(event) => setSpellname(event.target.value)}
          type="text"
          placeholder="spellname"
        />
        <input
          value={attackmod}
          className="add-spell-form-input"
          onChange={(event) => setAttackmod(event.target.value)}
          type="number"
          placeholder="attackmod"
        />
        <input
          value={defencemod}
          className="add-spell-form-input"
          onChange={(event) => setDefencemod(event.target.value)}
          type="number"
          placeholder="defencemod"
        />
        <input
          value={specialeffect}
          className="add-spell-form-input"
          onChange={(event) => setSpecialeffect(event.target.value)}
          type="number"
          placeholder="specialeffect"
        />
        <textarea
          value={description}
          className="add-book-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />
        <button className="add-book-form-button">Add book!</button>
      </form>
    </div>
  );
}
