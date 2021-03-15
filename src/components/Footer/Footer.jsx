import classes from './Footer.module.css';
import AboutUs from './components/AboutUs/AboutUs';
import FolowUs from './components/FolowUs/FolowUs';
import InstagramFeed  from './components/InstagramFeed/InstagramFeed';
import Newsletter from './components/Newsletter/Newsletter';

function Footer() {

    return (
        <div className={classes.footer}> 
            <AboutUs />
            <Newsletter />
            <InstagramFeed />
            <FolowUs />
        </div>
    );
}

export default Footer;
