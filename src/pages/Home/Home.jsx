import React from "react";
import Conditions from "./sections/Conditions";
import Main from "./sections/Main";
import Products from "./sections/Products";
import Promo from "./sections/Promo";
import Grid from "@material-ui/core/Grid";
import WeekDeals from "./sections/WeekDeals";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Grid container justify="center" className={classes.bg}>
      <Grid item xl={10} lg={10} md={10} m={10} xs={10}>
        <Main />
        <Conditions />
        <Promo />
        <Products />
        <WeekDeals />
      </Grid>
    </Grid>
  );
};

export default Home;
