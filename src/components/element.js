import React, { Component } from "react";
import axios from "axios";

import Hud from "./hud.js";
import emptySpellForm from "../../static/assets/images/emptySpellForm.png";
import {
  fireSpells,
  waterSpells,
  airSpells,
  earthSpells,
} from "./spell-library.js";

export default class Element extends Component {
  constructor(props) {
    super(props);

    const Fire = fireSpells;
    const Water = waterSpells;
    const Air = airSpells;
    const Earth = earthSpells;
    const EmptySpell = emptySpellForm;

    this.state = {
      element1: {},
      element2: {},
      combinedElement: 'EmptySpell',
      form: {},
    };

    // this.fillElement = this.fillElement.bind(this);
    // this.combineElement = this.combineElement.bind(this);
    // this.spellCaller = this.spellCaller.bind(this);
  }

  setElement() {
    if (this.state.element1 ? this.setState.element2 : this.setState.element1);
    console.log(this.state.element1);
  }

  combineElement() {
    if (
      this.state.element1 && this.state.element2
        ? (this.setState.combinedElement = this.state.element1.element2)
        : null
    );
  }

  spellCaller() {
    return this.state.combinedElement + form;
  }

  render() {
    return
    <div className="hud">
      <div className="spellform">
        <h1>{this.state.combinedElement}</h1>
        <h1>{form}</h1>
      </div>

      <div className="mana">
        <button onClick={this.setElement(this.innerText)}>Fire Mana</button>
        <button onClick={this.setElement(this.innerText)}>Water Mana</button>
        <button onClick={this.setElement(this.innerText)}>Air Mana</button>
        <button onClick={this.setElement(this.innerText)}>Earth Mana</button>
      </div>
    </div>
  };
}
