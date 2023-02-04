import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebarNav">
      <NavLink>Homepage</NavLink>
      <hr />
      <NavLink>Restaurant one</NavLink>
      <NavLink>Restaurant two</NavLink>
      <NavLink>Restaurant three</NavLink>
      <NavLink>Restaurant four</NavLink>
      <NavLink>Restaurant five</NavLink>
      <NavLink>Restaurant six</NavLink>
    </aside>
  );
}
