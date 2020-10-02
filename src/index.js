import React from "react";
import ReactDOM from "react-dom";
import PlayersList from "./PlayersList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PlayersList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
