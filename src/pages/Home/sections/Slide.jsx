import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Main.module.css";
import sneakers from "../../../images/Home/banner-img.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Slide = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" style={{ marginTop: "80px" }}>
        <Grid item xl={6} lg={6} md={6} m={12} xs={12}>
          <h1>
            {props.brand}
            <br />
            Collection!
          </h1>
          <p style={{ margin: "20px 0 20px 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Button variant="contained" color="primary">
            ADD TO BAG
          </Button>
        </Grid>
        <Grid item xl={6} lg={6} md={6} m={12} xs={12}>
          <img
            src={sneakers}
            alt="sneakers"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Slide;
