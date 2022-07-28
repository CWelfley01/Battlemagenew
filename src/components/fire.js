import React from "react";

import styles from "../style/main.scss";

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
      <img className="mana-icon" src={fireicon} />
     
    </div>
  );
}
// onClick={setMana}