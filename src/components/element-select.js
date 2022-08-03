import React from "react";

export default function ElementSelect() {
  constructor(props);
  super(props);

  this.state = {
    element1: {},
    element2: {},
    combinedElement: {},
    form: {},
  };

  setFireMana = this.setFireMana.bind(this);
  setWaterMana = this.setWaterMana.bind(this);
  setAirMana = this.setAirMana.bind(this);
  setEarthMana = this.setEarthMana.bind(this);

  const setFireMana = () => {
    if ((element1 = "")) this.setState({ element1: "Fire" });
    else this.setState({ element2 });
  };

  const setWaterMana = () => {
    if ((element1 = "")) this.setState({ element1: "Water" });
    else this.setState({ element2 });
  };

  const setAirMana = () => {
    if ((element1 = "")) this.setState({ element1: "Air" });
    else this.setState({ element2 });
  };

  const setEarthMana = () => {
    if ((element1 = "")) this.setState({ element1: "Earth" });
    else this.setState({ element2 });
  };

  return <div>ElementSelect</div>;
}
