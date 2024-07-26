import React, { useContext } from "react";
import style from "./style.module.css";
import Users from "./users/Users";
import Adduser from "./users/Adduser";
import Posts from "./posts/Posts";
import Gallery from "./gallery/Gallery";
import Todos from "./todos/Todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "./contexts/MainContext";
import { Navigate, Route, Routes } from "react-router-dom";
import AlarmEditeuser from "./users/AlarmEditeuser";

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
        <Route path="/user/add" element={<Adduser />}>
          <Route path=":Id" />
          {/* <Route path=":Id" element={<AlarmEditeuser/>} /> */}
        </Route>
        <Route path="/post" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="*" element={<Navigate to="/user" />} />
      </Routes>
    </div>
  );
};

export default Content;
