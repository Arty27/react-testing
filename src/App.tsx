import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./Components/Application/Application";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;
