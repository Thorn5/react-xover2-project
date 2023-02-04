import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useFetch from "./useFetch";

function Sidebar() {
  const { restaurants, isLoading, error } = useFetch();
  return (
    <aside className="sidebarNav">
      <NavLink className="navlinks homepage" to="/">
        Homepage
      </NavLink>
      <hr />
      <NavLink className="navlinks" to="/restaurant-one">
        Restaurant one
      </NavLink>
      <NavLink className="navlinks" to="/restaurant-two">
        Restaurant two
      </NavLink>
      <NavLink className="navlinks" to="/restaurant-three">
        Restaurant three
      </NavLink>
      <NavLink className="navlinks" to="/restaurant-four">
        Restaurant four
      </NavLink>
      <NavLink className="navlinks" to="/restaurant-five">
        Restaurant five
      </NavLink>
      <NavLink className="navlinks" to="/restaurant-six">
        Restaurant six
      </NavLink>
      <Outlet />
    </aside>
  );
}

export default Sidebar;
