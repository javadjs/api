import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import ParentCompo from "./ParentCompo";
import PureCompo from "./PureComponent";

const App = () => {
  return (
    <div className="App">
      
      <PureCompo></PureCompo>
    </div>
  );
};

export default App;
