import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebarNav">
      <li>
        <NavLink>Homepage</NavLink>
      </li>
      <hr />
      <li>
        <NavLink>Restaurant one</NavLink>
      </li>
      <li>
        <NavLink>Restaurant two</NavLink>
      </li>
      <li>
        <NavLink>Restaurant three</NavLink>
      </li>
      <li>
        <NavLink>Restaurant four</NavLink>
      </li>
      <li>
        <NavLink>Restaurant five</NavLink>
      </li>
      <li>
        <NavLink>Restaurant six</NavLink>
      </li>
    </aside>
  );
}
