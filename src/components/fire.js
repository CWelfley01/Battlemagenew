import React from 'react';

import styles from '../style/main.scss';

import fireicon from "../../static/assets/images/fireicon.png";

export default function Fire(props) {
  // const setMana = () => {
  //   axios
  //     .get(`http://localhost:5000/spell/${props.spellData.id}`, {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //     })
  //     .then((response) => console.log("success", response));
  // };
  
  
  return (
  <div>
    <img className="spell-icon" src={fireicon} />
    {/* <h2>{props.spellData.spellname}</h2>
    <h3>{props.spellData.attackmod}</h3>
    <h3>{props.spellData.defencemod}</h3>
    <h3>{props.spellData.specialeffect}</h3>
    <h4>{props.spellData.description}</h4>
    <button onClick={setMana}></button> */}
  </div>
  )
}