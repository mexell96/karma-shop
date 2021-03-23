import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Brand.module.css";

const Brand = (props) => {
  return (
    <Grid
      xl={2}
      lg={2}
      md={4}
      m={4}
      xs={6}
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ padding: "20px" }}>
      <img src={props.img} alt="{props.img}" className={classes.brand} />
    </Grid>
  );
};

export default Brand;
