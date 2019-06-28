import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "labrator"
    }),
    React.createElement(Pet, {
      name: "Ginger",
      animal: "dog",
      breed: "weiner-dog"
    }),
    React.createElement(Pet, { name: "Sam", animal: "Bird", breed: "Tocan" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
