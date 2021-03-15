import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className={classes.li}>
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
