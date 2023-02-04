import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebarNav">
      <NavLink>Homepage</NavLink>
      <hr />
      <NavLink to="messages">Restaurant one</NavLink>
      <NavLink>Restaurant two</NavLink>
      <NavLink>Restaurant three</NavLink>
      <NavLink>Restaurant four</NavLink>
      <NavLink>Restaurant five</NavLink>
      <NavLink>Restaurant six</NavLink>
      <Outlet />
    </aside>
  );
}
