import React, { Component } from "react";
import axios from "axios";

export default class GetElements extends Component {
  constructor(props) {
    super(props);

    this.listElements = this.listElements.bind(this);
  }
  listElements = (event) => {
    axios
      .get("http://127.0.0.1:5000/element")
      .then((response) => console.log(response.data.json))
      .catch((error) => console.error(error.response.data));
    // event.preventDefault();
  };
  render() {
    this.listElements();

    return <div></div>;
  }
}
