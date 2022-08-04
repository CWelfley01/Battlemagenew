import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/navbar.scss";


export default function NavBar() {
  return (
    <div>
      <div className="nav-header">
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          exact
          to="/"
        >
          Battle Page
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-Element"
        >
          Add Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-FireElement"
        >
          Add FIRE Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-WaterElement"
        >
          Add WATER Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-AirElement"
        >
          Add AIR Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-EarthElement"
        >
          Add EARTH Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-FormElement"
        >
          Add FORM Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-spell"
        >
          Add a Spell!
        </NavLink>
      </div>
    </div>
  );
}
