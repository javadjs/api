import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import style from "./style.module.css";
import { MainContext } from "./contexts/MainContext";

const App = () => {
  const [showmenu, setshowmenu] = useState(false);

  return (
    <div>
      <MainContext.Provider value={{showmenu, setshowmenu}}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </div>
  );
};

export default App;
