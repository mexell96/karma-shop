import React from "react";
import classes from "./WeekDeals.module.css";
import picture from '../../../images/instPhotos/i1.jpg'
import dealsImg from '../../../images/Home/WeekDeals/c5.jpg'

const Product = ({ name, img, price, prevPrice }) => {
    return (
        <div style={{ display: "flex", minWidth: "30%" }}>
            <img src={img} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ color: "black", fontFamily: '"Roboto", sans-serif' , fontSize: "14px"}}>{name}</p>
                <div style={{ display: "flex"}}>
                    <span style={{ marginRight: "20px"}}>{price}</span>
                    <strike className={classes.prevPrice}>{prevPrice}</strike>
                </div>
            </div>
        </div>
    );
}

const WeekDeals = () => {
    return (
        <div className={classes.section}>
            <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: "500"}}>Deals of the Week</h1>
            <p style={{marginBottom: "50px", width: "50%", textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua></p>
            <div style={{ display: "flex", alignItems: "start", marginBottom: "80px" }}>
                <div className={classes.container}>
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                    <Product name='BLACK LACE HEELS' img={picture} price='$123.00' prevPrice='$200.00' />
                </div>
                <img className={classes.bigImg} src={dealsImg} />
            </div>
        </div>
    );
};

export default WeekDeals;
