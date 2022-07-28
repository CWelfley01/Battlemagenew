import React, { Component } from "react";
import styles from "../style/hud.scss";

import Scroll from "../../static/assets/images/emptySpellForm.png";
import PoweredScroll from "../../static/assets/images/poweredSpellForm.png";

import Fire from "./fire.js";
import Water from "./water.js";
import Air from "./air.js";
import Earth from "./earth.js";

export default class Hud extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="spellform">
          <div className="background">
            <img src={Scroll} />
            
          </div>
          <div className="foreground">
            
          </div>
        </div>
        <div className="hud">
          <div className="mana">
            <button>
              <Fire />
            </button>
            <button>
              <Water />
            </button>
            <button>
              <Air />
            </button>
            <button>
              <Earth />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
