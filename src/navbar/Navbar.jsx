import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <NavLink
            exact
            to="/"
            className={classes.NavLink}
            activeClassName={classes.selected}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={classes.NavLink}
            activeClassName={classes.selected}>
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={classes.NavLink}
            activeClassName={classes.selected}>
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages"
            className={classes.NavLink}
            activeClassName={classes.selected}>
            PAGES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={classes.NavLink}
            activeClassName={classes.selected}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
