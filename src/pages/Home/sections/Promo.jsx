import React from "react";
import classes from "./Promo.module.css";
import pic1 from "../../../images/Home/Promo/c1.jpg";
import pic2 from "../../../images/Home/Promo/c2.jpg";
import pic3 from "../../../images/Home/Promo/c3.jpg";
import pic4 from "../../../images/Home/Promo/c4.jpg";
import sales from "../../../images/Home/Promo/c5.jpg";

const Promo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.pic}>
        <div>
          <img
            src={pic1}
            alt="pic1"
            className={classes.imgStyle}
            style={{ "max-width": "100%", height: "auto" }}
          />
          <img
            src={pic2}
            alt="pic2"
            className={classes.imgStyle}
            style={{ "max-width": "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={pic3}
            alt="pic3"
            className={classes.imgStyle}
            style={{ "max-width": "100%", height: "auto" }}
          />
          <img
            src={pic4}
            alt="pic4"
            className={classes.imgStyle}
            style={{ "max-width": "100%", height: "auto" }}
          />
        </div>
      </div>
      <div>
        <img
          src={sales}
          alt="sales"
          className={classes.imgStyle}
          style={{ "max-width": "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Promo;
