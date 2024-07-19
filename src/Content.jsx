import React, { useContext } from "react";
import style from "./style.module.css";
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Gallery from "./gallery/Gallery";
import Todos from "./todos/Todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "./contexts/MainContext";
import { Navigate, Route, Routes } from "react-router-dom";

const Content = () => {
  const { showmenu, setshowmenu } = useContext(MainContext);

  const menumobile = (e) => {
    e.stopPropagation();
    setshowmenu(!showmenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setshowmenu(false);
      }}
    >
      <i className={style.menu_button} onClick={menumobile}>
        <FontAwesomeIcon icon={faBars} />
      </i>
      <Routes>
     
        <Route path="/user" element={<Users />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todos />} />
        {/* <Route path="*" element={<Navigate to="/404page"/>} /> */}
        <Route path="*" element={<Navigate to="/user"/>} />

      </Routes>
    </div>
  );
};

export default Content;
