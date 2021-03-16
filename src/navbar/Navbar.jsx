import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../images/Navbar/logo.png";

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
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
      </div>
    </nav>
  );
};
