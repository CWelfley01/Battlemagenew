import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {/* <Link to="/basic">BASIC</Link>
      <Link to="/fire">FIRE</Link>
      <Link to="/water">WATER</Link>
      <Link to="/air">AIR</Link>
      <Link to="/earth">EARTH</Link> */}
      <Link to="/add-spell">Add a Spell!</Link>
    </div>
  );
}
