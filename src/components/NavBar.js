import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Battle Page</Link>
      <Link to="/add-FireElement">add FIRE element</Link>
      <Link to="/add-WaterElement">add WATER element</Link>
      <Link to="/add-AirElement">add AIR element</Link>       
      <Link to="/add-spell">Add a Spell!</Link>
    </div>
  );
}
