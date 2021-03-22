import React from "react";
import Slider from "react-slick";
import "./slick.css";
import Slide from "./Slide";

const Main = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{ marginBottom: "40px" }}>
      <Slide brand={"Nike"} />
      <Slide brand={"Adidas"} />
      <Slide brand={"Puma"} />
    </Slider>
  );
};

export default Main;
