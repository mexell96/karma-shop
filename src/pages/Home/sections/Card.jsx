import React from "react";
import pic1 from "../../../images/Home/Card/p1.jpg";
import pic2 from "../../../images/Home/Card/p2.jpg";
import pic3 from "../../../images/Home/Card/p3.jpg";
import pic4 from "../../../images/Home/Card/p4.jpg";
import pic5 from "../../../images/Home/Card/p5.jpg";
import pic6 from "../../../images/Home/Card/p6.jpg";
import pic7 from "../../../images/Home/Card/p7.jpg";
import pic8 from "../../../images/Home/Card/p8.jpg";
import classes from "./Card.module.css";
import "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.main}>
      <div className={classes.firstRow}>
        <div className={classes.card}>
          <img src={pic1} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
          <i class="fas fa-shopping-bag"></i>
        </div>
        <div className={classes.card}>
          <img src={pic2} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
        <div className={classes.card}>
          <img src={pic3} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
        <div className={classes.card}>
          <img src={pic4} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
      </div>
      <div className={classes.secondRow}>
        <div className={classes.card}>
          <img src={pic5} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
        <div className={classes.card}>
          <img src={pic6} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
        <div className={classes.card}>
          <img src={pic7} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
        <div className={classes.card}>
          <img src={pic8} alt="adidas" className={classes.imgStyle} />
          <h3 className={classes.h3}>
            adidas New Hammer sole for Sports person
          </h3>
          <div style={{ display: "flex" }}>
            <h6>150$</h6>
            &nbsp;
            <h6
              style={{ textDecoration: "line-through", filter: "invert(80%)" }}>
              210$
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
