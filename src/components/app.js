import React, { Component } from "react";

import Navbar from "../components/NavBar";
import Element from "./element";
import Hud from "./hud.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="title">
          <h1>BattleMage</h1>
        </div>
        <div className="screen">
          <Hud />
        </div>
      </div>
    );
  }
}
