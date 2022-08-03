import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../style/main.scss";

import fireicon from "../../static/assets/images/fireicon.png";

export default function Fire() {
  const [firstelement, setFirstElement] = useState("blank");
  const [secondelement, setSecondElement] = useState("blank");
  
  useEffect(() => {
    setFirstElement(firstelement = "fire"),console.log(firstelement) 
  },[]);

  return (
    <div>
      <button className="mana-icon" onClick={setFireMana}>
        <img src={fireicon} />
      </button>
    </div>
  );
}

// onClick={setMana}
