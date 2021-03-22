import React from "react";
import Conditions from "./sections/Conditions";
import Main from "./sections/Main";
import Products from "./sections/Products";
import Promo from "./sections/Promo";
import WeekDeals from "./sections/WeekDeals";

const Home = () => {
  return (
    <>
      <Main />
      <Conditions />
      <Promo />
      <Products />
      <WeekDeals />
    </>
  );
};

export default Home;
