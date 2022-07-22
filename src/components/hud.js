import React, { Component } from "react";
import styles from "../style/hud.scss";

import Scroll from "../../static/assets/images/blank-scroll-png.png";
import EmptySpell from "../../static/assets/images/emptySpellForm.png";
import Fire from "./fire.js";
import Water from "./water.js";
import Air from "./air.js";
import Earth from "./earth.js";

export default class Hud extends Component {
  render() {
    return (
      <div className="hud">
        <div className="background">
          <img src={Scroll} />
        </div>
        <div className="spellform">
          <img src={EmptySpell} />
        </div>

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
    );
  }
}
