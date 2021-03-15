import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/blog">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/pages">PAGES</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};
