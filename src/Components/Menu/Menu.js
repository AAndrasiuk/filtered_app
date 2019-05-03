import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
   return (
      <div>
         <nav className="menu">
            <NavLink
               to={`/`}
               className="menu__link"
               activeClassName={"menu__link-active"}
               exact
            >
               Manual
            </NavLink>
            <NavLink
               to={`/presets`}
               className="menu__link"
               activeClassName={"menu__link-active"}
            >
               Presets
            </NavLink>
         </nav>
      </div>
   );
}
