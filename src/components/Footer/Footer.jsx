import AboutUs from "./components/AboutUs/AboutUs";
import FollowUs from "./components/FollowUs/FollowUs";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
import Newsletter from "./components/Newsletter/Newsletter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <Grid container justify="space-around" style={{ background: "black" }}>
      <Grid item xl={2} lg={2} md={5} m={5} xs={10}>
        <AboutUs />
      </Grid>
      <Grid item xl={2} lg={2} md={5} m={5} xs={10}>
        <Newsletter />
      </Grid>
      <Grid item xl={2} lg={2} md={5} m={5} xs={10}>
        <InstagramFeed />
      </Grid>
      <Grid item xl={2} lg={2} md={5} m={5} xs={10}>
        <FollowUs />
      </Grid>

      <Grid
        item
        xl={10}
        lg={10}
        md={10}
        m={10}
        xs={10}
        justify="center"
        style={{ color: "#777777", padding: "40px" }}>
        <p style={{ textAlign: "center" }}>
          Copyright ©2021 All rights reserved | This template is made with
          <i>
            <FavoriteBorderIcon />
          </i>
          by <span style={{ color: "#ffba00" }}>Colorlib</span>
        </p>
      </Grid>
    </Grid>
  );
}

export default Footer;
