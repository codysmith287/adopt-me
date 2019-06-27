const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
