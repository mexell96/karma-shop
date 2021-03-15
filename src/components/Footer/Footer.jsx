import classes from './Footer.module.css';
import AboutUs from './components/AboutUs/AboutUs';
import FollowUs from './components/FollowUs/FollowUs';
import InstagramFeed from './components/InstagramFeed/InstagramFeed';
import Newsletter from './components/Newsletter/Newsletter';

function Footer() {

    return (
        <div className={classes.footer}>
            <div className={classes.blocks}>
                <AboutUs />
                <Newsletter />
                <InstagramFeed />
                <FollowUs />
            </div>
            <p>Copyright ©2021 All rights reserved | This template is made with <span className={classes.yellow}>♡</span> by <span className={classes.yellow}>Colorlib</span></p>
        </div>
    );
}

export default Footer;
