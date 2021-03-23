import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import classes from "./Conditions.module.css";

const Box = ({ name, img, style }) => {
  return (
    <Grid item xl>
      <Paper className={style}>
        <img src={img} alt="{img}" className={classes.img} />
        <h3 className={classes.h3}>{name}</h3>
        <span className={classes.span}>Free Shipping on all order</span>
      </Paper>
    </Grid>
  );
};

export default Box;
