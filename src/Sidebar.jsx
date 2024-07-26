import React, { useContext, useState } from "react";
import style from "./style.module.css";
import { MainContext } from "./contexts/MainContext";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

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

        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_bar" : "";
          }}
          to="/user"
        >
          <li>کاربران</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_bar" : "";
          }}
          to="/post"
        >
          <li>پست‌ها</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_bar" : "";
          }}
          to="/gallery"
        >
          <li>گالری</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_bar" : "";
          }}
          to="/todo"
        >
          <li>کارها</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
