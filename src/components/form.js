import React from 'react';

import shot from "../../static/assets/images/shot.png";
import beam from "../../static/assets/images/beam.png";
import wall from "../../static/assets/images/wall.png";
import clear from "../../static/assets/images/clear.png";

export function Shot(props) {
  return (
    <div>
        <img src={shot}/>
    </div>
  )
}

export function Beam(props) {
    return (
      <div><img src={beam}/></div>
    )
  }

  export function Wall(props) {
    return (
      <div><img src={wall}/></div>
    )
  }

  export function Clear(props) {
    return (
      <div><img src={clear}/></div>
    )
  }