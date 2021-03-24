import React from "react";
import classes from "./DropdownShopSmall.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const DropdownShopSmall = () => {
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropbtn}>Shop</div>
      <div className={classes.dropdownContent}>
        <NavLink
          to="/shop/shop_category"
          exact
          className={styles.NavLink}
          activeStyle={{ color: "#ffba00" }}>
          Shop category
        </NavLink>
        <NavLink
          to="/shop/product_details"
          exact
          className={styles.NavLink}
          activeStyle={{ color: "#ffba00" }}>
          Product details
        </NavLink>
        <NavLink
          to="/shop/product_checkout"
          exact
          className={styles.NavLink}
          activeStyle={{ color: "#ffba00" }}>
          Product checkout
        </NavLink>
        <NavLink
          to="/shop/shopping_card"
          exact
          className={styles.NavLink}
          activeStyle={{ color: "#ffba00" }}>
          Shopping card
        </NavLink>
        <NavLink
          to="/shop/confirmation"
          exact
          className={styles.NavLink}
          activeStyle={{ color: "#ffba00" }}>
          Confirmation
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownShopSmall;
