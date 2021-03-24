import classes from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div>
      <h1 className={classes.title}>About Us</h1>
      <p className={classes.info}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore dolore magna aliqua.
      </p>
    </div>
  );
}

export default AboutUs;
