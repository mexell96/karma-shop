import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt="adidas" className={classes.imgStyle} />
      <h3 className={classes.h3}>
        adidas New Hammer sole
        <br />
        for Sports person
      </h3>
      <div style={{ display: "flex" }}>
        <h6>150$</h6>
        &nbsp;
        <h6
          style={{
            textDecoration: "line-through",
            filter: "invert(80%)",
          }}>
          210$
        </h6>
      </div>
      <i className="fas fa-shopping-bag"></i>
    </div>
  );
};

export default Card;
