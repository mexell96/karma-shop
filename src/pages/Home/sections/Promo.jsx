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
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={classes.darken}>
            <div>
              <img
                src={pic1}
                alt="pic1"
                style={{ "max-width": "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className={classes.darken} style={{ width: "245px" }}>
            <img
              src={pic2}
              alt="pic2"
              style={{ "max-width": "100%", height: "auto" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={classes.darken} style={{ width: "245px" }}>
            <img
              src={pic3}
              alt="pic3"
              style={{ "max-width": "100%", height: "auto" }}
            />
          </div>
          <div className={classes.darken}>
            <img
              src={pic4}
              alt="pic4"
              style={{ "max-width": "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className={classes.darken} style={{ height: "435px" }}>
        <img
          src={sales}
          alt="sales"
          style={{ "max-width": "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Promo;
