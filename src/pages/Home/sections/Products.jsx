import React from "react";
import next from "../../../images/Home/Products/next.png";
import prev from "../../../images/Home/Products/prev.png";
import Card from "./Card";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.menuProducts}>
          <img src={prev} alt="prev" className={classes.arrows} />
          <h1 className={classes.menuTitle}>Latest Products</h1>
          <img src={next} alt="next" className={classes.arrows} />
        </div>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Card />
    </>
  );
};

export default Products;
