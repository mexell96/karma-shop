import React from "react";
import classes from "./DropdownShop.module.css";
import { NavLink } from "react-router-dom";

const DropdownShop = () => {
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropbtn}>Shop</div>
      <div className={classes.dropdownContent}>
        <NavLink
          exact
          to="/shop/shop_category"
          activeClassName={classes.selected}>
          Shop category
        </NavLink>
        <NavLink
          exact
          to="/shop/product_details"
          activeClassName={classes.selected}>
          Product details
        </NavLink>
        <NavLink
          exact
          to="/shop/product_checkout"
          activeClassName={classes.selected}>
          Product checkout
        </NavLink>
        <NavLink
          exact
          to="/shop/shopping_card"
          activeClassName={classes.selected}>
          Shopping card
        </NavLink>
        <NavLink
          exact
          to="/shop/confirmation"
          activeClassName={classes.selected}>
          Confirmation
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownShop;
