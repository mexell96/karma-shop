import React from "react";
import classes from "./Main.module.css";
import sneakers from "../../../images/Home/banner-img.png";

const Main = () => {
  return (
    <div className={classes.bg}>
      <div className={classes.Main}>
        <div className={classes.info}>
          <h1>
            New Nike
            <br />
            Collection!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <a href="#" className={classes.link}>
            <span>ADD TO BAG</span>
          </a>
        </div>
        <div className={classes.pic}>
          <img src={sneakers} alt="sneakers" />
        </div>
      </div>
    </div>
  );
};

export default Main;
