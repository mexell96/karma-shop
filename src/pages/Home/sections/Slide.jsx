import React from "react";
import Grid from "@material-ui/core/Grid";
import sneakers from "../../../images/Home/banner-img.png";
import Button from "@material-ui/core/Button";

const Slide = (props) => {
  return (
    <div>
      <Grid container justify="center">
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
