import React, { Component } from "react";
import axios from "axios";

export default function GetElements() {
  

    const listElements = () => {
      axios
        .get(
          "http://127.0.0.1:5000/Elements",
          
          {
            headers: { "Access-Control-Allow-Origin": "*" },
          }
        )
        .then((response) => console.log(response.data.json))
        .catch((error) => console.error(error));
      ;
    };
    return(
    <div>{listElements()}</div>)
};