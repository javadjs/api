import React, { useContext, useState } from "react";
import style from "./style.module.css";
import { MainContext } from "./contexts/MainContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { showmenu, setshowmenu } = useContext(MainContext);

  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showmenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="/assets/images/user2.jpg" alt="" />
        </li>
        <li>
          <Link to="/user">کاربران</Link>
        </li>
        <li>
          <Link to="/post">پست‌ها</Link>
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
        </li>
        <li>
          <Link to="/todo">کارها</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
