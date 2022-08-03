import React, { Component } from "react";
import axios from "axios";




export default class Element extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      element1: {},
      element2: {},
      combinedElement: {},
      form: {},
    };

    this.setElement = this.setElement.bind(this);
    this.combineElement = this.combineElement.bind(this);
    this.spellCaller = this.spellCaller.bind(this);
  }

  setFireMana(){
    this.setState({element1:"Fire"})
  }

  setWaterMana(){
    this.setState({element1:"Water"})
  }

  setAirMana(){
    this.setState({element1:"Air"})
  }

  setEarthMana(){
    this.setState({element1:"Earth"})
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
      <div className="spell" >
        
        <h1>{form}</h1>
      </div>

      <div className="mana">
        <button >Fire Mana</button>
        <button >Water Mana</button>
        <button >Air Mana</button>
        <button >Earth Mana</button>
      </div>
    </div>
  };
}
