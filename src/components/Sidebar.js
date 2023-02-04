import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebarNav">
      <NavLink to="/">Homepage</NavLink>
      <hr />
      <NavLink to="/restaurant-one">Restaurant one</NavLink>
      <NavLink to="/restaurant-two">Restaurant two</NavLink>
      <NavLink to="/restaurant-three">Restaurant three</NavLink>
      <NavLink to="/restaurant-four">Restaurant four</NavLink>
      <NavLink to="/restaurant-five">Restaurant five</NavLink>
      <NavLink to="/restaurant-six">Restaurant six</NavLink>
    </aside>
  );
}

export default Sidebar;
