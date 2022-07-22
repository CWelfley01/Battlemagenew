import React, { Component } from 'react';

import Scroll from '../../static/assets/images/blank-scroll-png.png'
import EmptySpell from '../../static/assets/images/emptySpellForm.png'
import Fire from '../../static/assets/images/icons8-fire-48.png';
import Water from '../../static/assets/images/icons8-water-48.png';
import Air from '../../static/assets/images/icons8-wind-16.png';
import Earth from '../../static/assets/images/icons8-rock-48.png';

export default class Hud extends Component {
  render() {
    return (
      <div className="hud">
      <div className="spellform">
        <img src={Scroll} />
      </div>

      <div className="mana">
        <button >
          <img src={Fire} />
          Fire Mana
        </button>
        <button >
          <img src={Water} />Water Mana</button>
        <button >
          <img src={Air} />Air Mana</button>
        <button >
          <img src={Earth} />Earth Mana</button>
      </div>
    </div>
    )
  }
}









