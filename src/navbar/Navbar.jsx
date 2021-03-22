import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../images/Navbar/logo.png";
import Grid from "@material-ui/core/Grid";

export const Navbar = () => {
  return (
    <Grid container justify="center">
      <ul className={classes.nav}>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li className={classes.li}>
            <NavLink
              exact
              to="/"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              HOME
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/shop"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              SHOP
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/blog"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              BLOG
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/pages"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              PAGES
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/contact"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              CONTACT
            </NavLink>
          </li>
        </Grid>
      </ul>
    </Grid>
  );
};
