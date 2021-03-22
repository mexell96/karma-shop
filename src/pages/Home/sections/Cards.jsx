import Card from "./Card";
import React from "react";
import pic1 from "../../../images/Home/Card/p1.jpg";
import pic2 from "../../../images/Home/Card/p2.jpg";
import pic3 from "../../../images/Home/Card/p3.jpg";
import pic4 from "../../../images/Home/Card/p4.jpg";
import pic5 from "../../../images/Home/Card/p5.jpg";
import pic6 from "../../../images/Home/Card/p6.jpg";
import pic7 from "../../../images/Home/Card/p7.jpg";
import pic8 from "../../../images/Home/Card/p8.jpg";
import "./Card.module.css";
import Grid from "@material-ui/core/Grid";

const Cards = (props) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{props.title}</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor <br />
        incididunt ut labore et dolore magna aliqua.
      </p>
      <Grid container spacing={1} justify="center">
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic1} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic2} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic3} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic4} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic5} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic6} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic7} />
        </Grid>
        <Grid item xl={3} lg={3} md={4} m={6} xs={6}>
          <Card image={pic8} />
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
