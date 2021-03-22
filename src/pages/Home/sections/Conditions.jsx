import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import freeDelivery from "../../../images/Home/Conditions/f-icon1.png";
import returnPolicy from "../../../images/Home/Conditions/f-icon2.png";
import support from "../../../images/Home/Conditions/f-icon3.png";
import securePayment from "../../../images/Home/Conditions/f-icon4.png";
import classes from "./Conditions.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Conditions = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={5} justify="center">
      <Grid item xl>
        <Paper className={styles.paper}>
          <img src={freeDelivery} alt="freeDelivery" className={classes.img} />
          <h3 className={classes.h3}>Free Delivery</h3>
          <span className={classes.span}>Free Shipping on all order</span>
        </Paper>
      </Grid>

      <Grid item xl>
        <Paper className={styles.paper}>
          <img src={returnPolicy} alt="returnPolicy" className={classes.img} />
          <h3 className={classes.h3}>Return Policy</h3>
          <span className={classes.span}>Free Shipping on all order</span>
        </Paper>
      </Grid>

      <Grid item xl>
        <Paper className={styles.paper}>
          <img src={support} alt="support" className={classes.img} />
          <h3 className={classes.h3}>24/7 Support</h3>
          <span className={classes.span}>Free Shipping on all order</span>
        </Paper>
      </Grid>

      <Grid item xl>
        <Paper className={styles.paper}>
          <img
            src={securePayment}
            alt="securePayment"
            className={classes.img}
          />
          <h3 className={classes.h3}>Secure Payment</h3>
          <span className={classes.span}>Free Shipping on all order</span>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Conditions;
