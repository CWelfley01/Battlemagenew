import React, { Component } from "react";
import styles from "../style/hud.scss";
import axios from "axios";

import Scroll from "../../static/assets/images/emptySpellForm.png";
import PoweredScroll from "../../static/assets/images/poweredSpellForm.png";

import fireicon from "../../static/assets/images/fireicon.png";
import watericon from "../../static/assets/images/watericon.png";
import airicon from "../../static/assets/images/airicon.png";
import earthicon from "../../static/assets/images/earthicon.png";
import shot from "../../static/assets/images/shot.png";
import beam from "../../static/assets/images/beam.png";
import wall from "../../static/assets/images/wall.png";
import clear from "../../static/assets/images/clear.png";

export default class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element1: "blank",
      element2: "blank",
      combinedElement: "blank",
      form: "blank",
      spell: "blank",
    };

    this.setFireMana = this.setFireMana.bind(this);
    this.setWaterMana = this.setWaterMana.bind(this);
    this.setAirMana = this.setAirMana.bind(this);
    this.setEarthMana = this.setEarthMana.bind(this);
    this.setShotForm = this.setShotForm.bind(this);
    this.setBeamForm = this.setBeamForm.bind(this);
    this.setWallForm = this.setWallForm.bind(this);
    this.combineElements = this.combineElements.bind(this);
  }

  setFireMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Fire" });
    } else {
      this.setState({ element2: "fire" });
    }
  }

  setWaterMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Water" });
    } else {
      this.setState({ element2: "Water" });
    }
  };

  setAirMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Air" });
    } else {
      this.setState({ element2: "Air" });
    }
  };

  setEarthMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Earth" });
    } else {
      this.setState({ element2: "Earth" });
    }
  };

  setShotForm = () => {
    this.setState({ form: "Shot" });

  };

  setBeamForm = () => {
    this.setState({ form: "Beam" });
  };

  setWallForm = () => {
    this.setState({ form: "Wall" });
  };

  combineElements = () => {
    if (this.state.element2 !== "blank") {
      axios
        .get(
          `http://127.0.0.1:5000/${this.state.element1}/${this.state.element2}`
        )
        .then((response) => console.log(response));
    }
  };

  componentDidUpdate() {
    this.combineElements();
  }

  clearSpellForm = () => {
    {
      this.setState({ element1: "blank" });
    }
    {
      this.setState({ element2: "blank" });
    }
    {
      this.setState({ form: "blank" });
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="spellform">
          <div className="background">
            <img src={Scroll} className="dead" />
            {/* <img src={PoweredScroll} className="live" /> */}
          </div>
          <div className="foreground">
            <div className="left-side">
              <div className="live">{this.state.element1}</div>
              <div className="dead">{this.state.combinedElement}</div>
            </div>
            <div className="right-side">
              <div className="live">{this.state.element2}</div>
              <div className="dead">{this.state.form}</div>
            </div>
          </div>
        </div>
        <div className="hud">
          <div className="mana">
            <button onClick={this.setFireMana}>
              <img src={fireicon} />
            </button>
            <button onClick={this.setWaterMana}>
              <img src={watericon} />
            </button>
            <button onClick={this.setAirMana}>
              <img src={airicon} />
            </button>
            <button onClick={this.setEarthMana}>
              <img src={earthicon} />
            </button>
          </div>
          <div className="form">
            <button onClick={this.setShotForm}>
              <img src={shot} />
            </button>
            <button onClick={this.setBeamForm}>
              <img src={beam} />
            </button>
            <button onClick={this.setWallForm}>
              <img src={wall} />
            </button>
            <button onClick={this.clearSpellForm}>
              <img src={clear} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
