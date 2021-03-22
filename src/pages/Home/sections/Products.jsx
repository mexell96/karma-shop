import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";

const Products = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{ marginBottom: "40px" }}>
      <Cards title={"Latest Products"} />
      <Cards title={"Coming Products"} />
    </Slider>
  );
};

export default Products;
