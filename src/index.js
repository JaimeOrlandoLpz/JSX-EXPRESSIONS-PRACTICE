//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const root = document.getElementById("root");

const name = "Jaime Orlando";
const date = new Date();

ReactDOM.render(
  <div>
    <p>Created By Jaime {name}</p>
    <p>@Copyright {date.getFullYear()}</p>
  </div>,
  root
);
