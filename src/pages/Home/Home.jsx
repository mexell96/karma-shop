import Grid from "@material-ui/core/Grid";
import React from "react";
import Brands from "./sections/Brands/Brands";
import Conditions from "./sections/Conditions";
import Main from "./sections/Main";
import Products from "./sections/Products";
import Promo from "./sections/Promo";
import WeekDeals from "./sections/WeekDeals";

const Home = () => {
  return (
    <Grid container justify="center">
      <Grid item xl={10} lg={10} md={10} m={10} xs={10}>
        <Main />
        <Conditions />
        <Promo />
        <Products />
        <Brands />
        <WeekDeals />
      </Grid>
    </Grid>
  );
};

export default Home;
