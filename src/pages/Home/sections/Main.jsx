import React from "react";
import classes from "./Main.module.css";
import sneakers from "../../../images/Home/banner-img.png";
import Grid from "@material-ui/core/Grid";

const Main = () => {
  return (
    <Grid container justify="center" style={{ marginTop: "80px" }}>
      <Grid item xl={6} lg={6} md={6} m={12} xs={12}>
        <h1>
          New Nike
          <br />
          Collection!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <a href="#" className={classes.link}>
          <span>ADD TO BAG</span>
        </a>
      </Grid>
      <Grid item xl={6} lg={6} md={6} m={12} xs={12}>
        <img
          src={sneakers}
          alt="sneakers"
          style={{ width: "100%", height: "auto", marginTop: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
