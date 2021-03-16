import React from "react";
import freeDelivery from "../../../images/Home/Conditions/f-icon1.png";
import returnPolicy from "../../../images/Home/Conditions/f-icon2.png";
import support from "../../../images/Home/Conditions/f-icon3.png";
import securePayment from "../../../images/Home/Conditions/f-icon4.png";
import classes from "./Conditions.module.css";

const Conditions = () => {
  return (
    <div className={classes.Conditions}>
      <div className={classes.blocks}>
        <img src={freeDelivery} alt="freeDelivery" />
        <h3>Free Delivery</h3>
        <span>Free Shipping on all order</span>
      </div>
      <div className={classes.blocks}>
        <img src={returnPolicy} alt="returnPolicy" />
        <h3>Return Policy</h3>
        <span>Free Shipping on all order</span>
      </div>
      <div className={classes.blocks}>
        <img src={support} alt="support" />
        <h3>24/7 Support</h3>
        <span>Free Shipping on all order</span>
      </div>
      <div className={classes.blocks}>
        <img src={securePayment} alt="securePayment" />
        <h3>Secure Payment</h3>
        <span>Free Shipping on all order</span>
      </div>
    </div>
  );
};

export default Conditions;