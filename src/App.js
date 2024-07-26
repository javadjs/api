import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import style from "./style.module.css";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showmenu, setshowmenu] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <MainContext.Provider value={{ showmenu, setshowmenu }}>
          <Sidebar />
          <Content />
          <h2>javad</h2>
        </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
