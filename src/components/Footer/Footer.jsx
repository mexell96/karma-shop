import classes from "./Footer.module.css";
import AboutUs from "./components/AboutUs/AboutUs";
import FollowUs from "./components/FollowUs/FollowUs";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
import Newsletter from "./components/Newsletter/Newsletter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.blocks}>
        <AboutUs />
        <Newsletter />
        <InstagramFeed />
        <FollowUs />
      </div>
      <p className={classes.copyright}>
        Copyright ©2021 All rights reserved | This template is made with
        <i className={classes.yellow}>
          <FavoriteBorderIcon />
        </i>
        by <span className={classes.yellow}>Colorlib</span>
      </p>
    </div>
  );
}

export default Footer;
