import React, { Component } from "react";
import styles from "../style/hud.scss";

import Scroll from "../../static/assets/images/emptySpellForm.png";
import PoweredScroll from "../../static/assets/images/poweredSpellForm.png";

import fireicon from "../../static/assets/images/fireicon.png";
import watericon from "../../static/assets/images/watericon.png";
import airicon from "../../static/assets/images/airicon.png";
import earthicon from "../../static/assets/images/earthicon.png";
import { Shot, Beam, Wall, Clear } from "./form.js";

export default class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element1: "blank",
      element2: "blank",
      combinedElement: "blank",
      form: "blank",
    };

    this.setFireMana = this.setFireMana.bind(this);
    this.setWaterMana = this.setWaterMana.bind(this);
    this.setAirMana = this.setAirMana.bind(this);
    this.setEarthMana = this.setEarthMana.bind(this);
  }

  setFireMana() {
    console.log(this.state.element1)
    // if ((this.element1 = "blank")) this.setState({ element1: "Fire" })
    // else( this.setState({ element2: "Fire" }));
  };

  setWaterMana = () => {
    if ((this.element1 = "blank")) this.setState({ element1: "Water" })
    else this.setState({ element2: "Water" });
  };

  setAirMana = () => {
    if ((this.element1 = "blank")) this.setState({ element1: "Air" })
    else this.setState({ element2: "Air" });
  };

  setEarthMana = () => {
    if ((this.element1 = "blank")) this.setState({ element1: "Earth" })
    else this.setState({ element2: "Earth" });
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
            <div>{this.state.element1}</div>
          </div>
        </div>
        <div className="hud">
          <div className="mana">
            <button onClick={this.setFireMana}>
              <img src={fireicon} />
            </button>
            <button>
              <img src={watericon} />
            </button>
            <button>
              <img src={airicon} />
            </button>
            <button>
              <img src={earthicon} />
            </button>
          </div>
          <div className="form">
            <button>
              <Shot />
            </button>
            <button>
              <Beam />
            </button>
            <button>
              <Wall />
            </button>
            <button>
              <Clear />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
