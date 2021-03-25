import React from "react";
import classes from "./Promo.module.css";
import pic1 from "../../../images/Home/Promo/c1.jpg";
import pic2 from "../../../images/Home/Promo/c2.jpg";
import pic3 from "../../../images/Home/Promo/c3.jpg";
import pic4 from "../../../images/Home/Promo/c4.jpg";
import sales from "../../../images/Home/Promo/c5.jpg";
import Grid from "@material-ui/core/Grid";

const Promo = () => {
  return (
    <Grid
      container
      justify="center"
      style={{ padding: "50px 0px" }}
      spacing={2}>
      <Grid
        item
        xl={7}
        lg={9}
        md={7}
        m={10}
        xs={10}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          item
          xl={8}
          lg={7}
          md={10}
          m={9}
          xs={9}
          style={{ display: "flex" }}
          className={classes.customizeDiv}>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            m={4}
            xs={4}
            style={{ margin: "5px" }}>
            <img src={pic2} alt="pic2" className={classes.imgStyle} />
          </Grid>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            m={8}
            xs={8}
            style={{ margin: "5px" }}>
            <img src={pic1} alt="pic1" className={classes.imgStyle} />
          </Grid>
        </Grid>
        <Grid
          item
          xl={8}
          lg={7}
          md={10}
          m={9}
          xs={9}
          style={{ display: "flex" }}
          className={classes.customizeDiv}>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            m={8}
            xs={8}
            style={{ margin: "5px" }}>
            <img src={pic4} alt="pic1" className={classes.imgStyle} />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            m={4}
            xs={4}
            style={{ margin: "5px" }}>
            <img src={pic3} alt="pic2" className={classes.imgStyle} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        m={10}
        xs={10}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img src={sales} alt="sales" className={classes.imgStyle} />
      </Grid>
    </Grid>
  );
};

export default Promo;
