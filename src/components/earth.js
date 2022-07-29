import React from 'react';
import axios from "axios";

import earthicon from "../../static/assets/images/earthicon.png";

export default function Earth(props) {
  axios
    .get(`http://localhost:5000/spells`)

  return (
    <div>
        <img src={earthicon} />
    </div>
  )
}