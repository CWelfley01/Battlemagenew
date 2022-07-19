import React from 'react';

export default function Hud() {
  return (
    <div className="hud">
      <div className="spellform">
        <h1>{combinedElement}</h1>
        <h1>{form}</h1>
      </div>

      <div className="mana">
        <button onClick={this.setElement(this.innerText)}>Fire Mana</button>
        <button onClick={this.setElement(this.innerText)}>Water Mana</button>
        <button onClick={this.setElement(this.innerText)}>Air Mana</button>
        <button onClick={this.setElement(this.innerText)}>Earth Mana</button>
      </div>
    </div>
  )
}

