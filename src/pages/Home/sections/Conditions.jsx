import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import freeDelivery from "../../../images/Home/Conditions/f-icon1.png";
import returnPolicy from "../../../images/Home/Conditions/f-icon2.png";
import support from "../../../images/Home/Conditions/f-icon3.png";
import securePayment from "../../../images/Home/Conditions/f-icon4.png";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
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
      <Box name={"Free Delivery"} img={freeDelivery} style={styles.paper} />
      <Box name={"Return Policy"} img={returnPolicy} style={styles.paper} />
      <Box name={"24/7 Support"} img={support} style={styles.paper} />
      <Box name={"Secure Payment"} img={securePayment} style={styles.paper} />
    </Grid>
  );
};

export default Conditions;
