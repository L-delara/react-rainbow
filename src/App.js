import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./Components/ColorBlock";
import ColorForm from "./Components/ColorForm";

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />;
  });
  let addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      {colorMap}
      {colors.map((color, i) => (
        <ColorForm addColor={addColor} />
      ))}
    </div>
  );
}

export default App;
