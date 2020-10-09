import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav>
    <div class="nav-wrapper teal">
      <a href="/" class="right">
        React
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <NavLink to="/" activeClassName="teal darken-2" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="teal darken-2">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="teal darken-2">
            About
          </NavLink>
        </li>
      </ul>
    </div>
    </nav>
  );
}

export default Header;
