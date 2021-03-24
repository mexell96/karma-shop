import React from "react";
import picture from "../../../images/instPhotos/i1.jpg";
import dealsImg from "../../../images/Home/WeekDeals/c5.jpg";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

const WeekDeals = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Deals of the Week</h1>
        <p style={{ textAlign: "center", padding: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <Grid
        container
        justify="center"
        style={{ padding: "50px 0px" }}
        spacing={2}>
        <Grid item xl={6} lg={6} md={6} m={9} xs={9}>
          <Grid container>
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
            <Product
              name="BLACK LACE HEELS"
              img={picture}
              price="$123.00"
              prevPrice="$200.00"
            />
          </Grid>
        </Grid>

        <Grid item xl={3} lg={3} md={3} m={9} xs={9}>
          <img
            src={dealsImg}
            alt="dealsImg"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "255px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default WeekDeals;
