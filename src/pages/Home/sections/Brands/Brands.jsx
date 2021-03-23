import Grid from "@material-ui/core/Grid";
import React from "react";
import pic1 from "../../../../images/brand/1.png";
import pic2 from "../../../../images/brand/2.png";
import pic3 from "../../../../images/brand/3.png";
import pic4 from "../../../../images/brand/4.png";
import pic5 from "../../../../images/brand/5.png";
import Brand from "./Brand";

const Brands = () => {
  return (
    <Grid container justify="center">
      <Brand img={pic1} />
      <Brand img={pic2} />
      <Brand img={pic3} />
      <Brand img={pic4} />
      <Brand img={pic5} />
    </Grid>
  );
};

export default Brands;
