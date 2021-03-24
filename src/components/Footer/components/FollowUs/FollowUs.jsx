import classes from "./FollowUs.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function FollowUs() {
  return (
    <div>
      <h1 className={classes.title}>Folow Us</h1>
      <p className={classes.info}>Let us be social</p>
      <div className={classes.socials}>
        <FacebookIcon className={classes.svgImg} />
        <TwitterIcon className={classes.svgImg} />
        <InstagramIcon className={classes.svgImg} />
        <YouTubeIcon className={classes.svgImg} />
      </div>
    </div>
  );
}

export default FollowUs;
